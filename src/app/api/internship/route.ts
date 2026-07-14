import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, university, role, message, cashfree_order_id } = body;

    // Validate inputs
    if (!name || !email || !role || !message) {
      return NextResponse.json(
        { error: 'Name, email, role, and message are required.' },
        { status: 400 }
      );
    }

    if (!cashfree_order_id) {
      return NextResponse.json(
        { error: 'Payment verification failed. Missing payment details.' },
        { status: 400 }
      );
    }

    const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID?.replace(/"/g, '');
    const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY?.replace(/"/g, '');
    
    let verifiedPaymentId = null;

    if (CASHFREE_APP_ID && CASHFREE_SECRET_KEY) {
      try {
        const response = await fetch(
          `https://api.cashfree.com/pg/orders/${cashfree_order_id}/payments`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-api-version': '2023-08-01',
              'x-client-id': CASHFREE_APP_ID,
              'x-client-secret': CASHFREE_SECRET_KEY,
            },
          }
        );

        const payments = await response.json();

        if (!response.ok) {
          console.error("Cashfree verification error:", JSON.stringify(payments));
          return NextResponse.json(
            { error: 'Failed to verify payment status with Cashfree.' },
            { status: 500 }
          );
        }

        const successfulPayment = Array.isArray(payments)
          ? payments.find((p: any) => p.payment_status === "SUCCESS")
          : null;

        if (!successfulPayment) {
          return NextResponse.json(
            { error: 'Payment not found or not successful. Payment verification failed.' },
            { status: 400 }
          );
        }
        verifiedPaymentId = successfulPayment.cf_payment_id?.toString();
      } catch (err: any) {
        console.error("Cashfree verification error", err);
        return NextResponse.json(
          { error: 'Failed to verify payment status with Cashfree.' },
          { status: 500 }
        );
      }
    }

    // 2. Save to Grist
    const GRIST_API_KEY = process.env.GRIST_API_KEY;
    const GRIST_DOC_ID = 'rf3G8gPaj7We';
    const GRIST_TABLE_ID = process.env.GRIST_TABLE_ID || 'Table1';

    let applicationId = cashfree_order_id; // Using order ID as application reference

    if (GRIST_API_KEY) {
      try {
        const gristResponse = await fetch(`https://docs.getgrist.com/api/docs/${GRIST_DOC_ID}/tables/${GRIST_TABLE_ID}/records`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GRIST_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: name,
                  Email: email,
                  Mobile: mobile || '',
                  University: university || '',
                  Role: role,
                  Message: message,
                  PaymentId: verifiedPaymentId || "unverified",
                  PaymentOrderId: cashfree_order_id,
                  Date: new Date().toISOString()
                }
              }
            ]
          }),
        });

        if (!gristResponse.ok) {
          console.error('Failed to save to Grist:', await gristResponse.text());
        } else {
           const gristData = await gristResponse.json();
           if (gristData.records && gristData.records.length > 0) {
              applicationId = gristData.records[0].id.toString();
           }
        }
      } catch (gristError) {
        console.error('Error connecting to Grist:', gristError);
      }
    } else {
      console.warn("GRIST_API_KEY is not configured. Skipping Grist integration.");
    }

    // 3. Email Configuration
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
    const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_FROM = process.env.SMTP_FROM || 'info@nirmataai.site';
    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if ((!SMTP_PASS || !SMTP_USER) && !BREVO_API_KEY) {
      console.warn("Neither SMTP nor BREVO_API_KEY is configured. Application saved, but emails will not be sent.");
      return NextResponse.json(
        { success: true, message: 'Application saved successfully (Emails skipped)' },
        { status: 200 }
      );
    }

    const sendEmail = async (payload: nodemailer.SendMailOptions) => {
      // Prioritize REST API over SMTP to prevent Vercel serverless function timeouts
      if (BREVO_API_KEY) {
        try {
          const apiPayload = {
            sender: { name: payload.from?.toString().split('<')[0].replace(/"/g, '').trim() || 'Internship Form', email: SMTP_FROM },
            replyTo: payload.replyTo ? { email: payload.replyTo.toString().split('<')[1].replace('>', ''), name: payload.replyTo.toString().split('<')[0].trim() } : undefined,
            to: [{ email: payload.to?.toString() || SMTP_FROM, name: payload.to?.toString() || 'Admin' }],
            subject: payload.subject,
            htmlContent: payload.html,
          };

          const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify(apiPayload),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Brevo API Error: ${JSON.stringify(errorData)}`);
          }
          return;
        } catch (error) {
          console.error('REST API Error:', error);
          // Fall through to SMTP if REST fails
        }
      }

      if (SMTP_USER && SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465,
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS,
            },
          });
          await transporter.sendMail(payload);
          return;
        } catch (error) {
          console.error('SMTP Error:', error);
          throw new Error('Failed to send email via SMTP');
        }
      }

      throw new Error('Failed to send email');
    };

    // Email to Admin (info@nirmataai.site)
    const adminPayload = {
      from: `"Internship Application" <${SMTP_FROM}>`,
      replyTo: `${name} <${email}>`,
      to: SMTP_FROM,
      subject: `New Intern Application: ${name} - ${role}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 40px 20px; border-radius: 12px;">
          <div style="background-color: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #2563eb;">
            <h2 style="color: #111827; margin-top: 0; font-size: 24px; font-weight: 600;">New Internship Application</h2>
            <p style="color: #4b5563; font-size: 16px; margin-bottom: 24px;">A new candidate has applied for the 2026 Internship Program.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 140px;"><strong style="color: #374151;">Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Mobile Number:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${mobile || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">University/College:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${university || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Role Applied For:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 9999px; font-size: 14px; font-weight: 500;">
                    ${role}
                  </span>
                </td>
              </tr>
            </table>
            
            <h3 style="color: #374151; font-size: 16px; margin-bottom: 12px;">Cover Letter / Links:</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; color: #4b5563; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
            
            <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">Application ID: ${applicationId}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to Student
    const clientPayload = {
      from: `"NirmataAI Tech Solutions" <${SMTP_FROM}>`,
      to: email,
      subject: 'Application & Payment Confirmed - NirmataAI Internship 2026',
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f5; padding: 40px 20px; border-radius: 16px;">
          <div style="background-color: #ffffff; padding: 48px; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); border-top: 6px solid #2563eb; text-align: center;">
            <img src="https://nirmataai.site/logo.png" alt="NirmataAI Logo" style="height: 56px; margin-bottom: 32px;" />
            <h1 style="color: #111827; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; margin-top: 0; margin-bottom: 16px;">Application Received! 🎉</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.7; margin-bottom: 24px; text-align: left;">
              Hi <strong style="color: #111827;">${name}</strong>,<br><br>
              Thank you for applying to the <strong style="color: #2563eb;">2026 Internship Program</strong> at NirmataAI Tech Solutions for the role of <strong>${role}</strong>.
            </p>
            
            <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; margin-bottom: 32px; text-align: left;">
              <p style="color: #065f46; font-size: 15px; margin: 0; font-weight: 500;">
                ✅ Payment of ₹49.00 Successful<br>
                <span style="font-size: 13px; color: #047857; font-weight: 400;">Order ID: ${cashfree_order_id}</span>
              </p>
            </div>
            
            <p style="color: #4b5563; font-size: 16px; line-height: 1.7; text-align: left; margin-bottom: 32px;">
              Our recruitment team will review your profile and get back to you soon regarding the next steps. We appreciate your interest in building the future with us!
            </p>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: left;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong style="color: #374151;">The NirmataAI Hiring Team</strong>
              </p>
            </div>
            
            <div style="margin-top: 32px; text-align: center;">
              <a href="https://www.linkedin.com/in/nirmataai-tech-solutions-913625421" style="display: inline-block; margin: 0 8px; color: #2563eb; text-decoration: none; font-weight: 500;">LinkedIn</a>
              <a href="https://www.instagram.com/nirmataai_?igsh=MWRwNTF0dHMxdndhaQ==" style="display: inline-block; margin: 0 8px; color: #2563eb; text-decoration: none; font-weight: 500;">Instagram</a>
              <a href="https://www.youtube.com/@nirmataAITechSolutions" style="display: inline-block; margin: 0 8px; color: #2563eb; text-decoration: none; font-weight: 500;">YouTube</a>
            </div>
          </div>
          <div style="text-align: center; margin-top: 24px; color: #9ca3af; font-size: 12px;">
            &copy; ${new Date().getFullYear()} NirmataAI Tech Solutions. All rights reserved.
          </div>
        </div>
      `,
    };

    // Send emails concurrently
    await Promise.all([
      sendEmail(adminPayload),
      sendEmail(clientPayload)
    ]);

    return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Internship API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
