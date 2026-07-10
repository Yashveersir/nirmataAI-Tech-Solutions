import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, company, service, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
    const SMTP_USER = process.env.SMTP_USER;

    if (!SMTP_PASSWORD || !SMTP_USER) {
      console.warn("SMTP_PASSWORD or SMTP_USER is missing. Emails will not be sent.");
      return NextResponse.json(
        { error: 'Email service is not configured properly.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const sendEmail = async (payload: nodemailer.SendMailOptions) => {
      try {
        await transporter.sendMail(payload);
      } catch (error) {
        console.error('Nodemailer Error:', error);
        throw new Error('Failed to send email via SMTP');
      }
    };

    // Email to Admin (info@nirmataai.site)
    // We send from the verified admin email to avoid Brevo rejecting unverified sender domains, 
    // but set the replyTo to the client's email so you can reply directly to them.
    const adminPayload = {
      from: '"Contact Form" <info@nirmataai.site>',
      replyTo: `${name} <${email}>`,
      to: 'info@nirmataai.site',
      subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 40px 20px; border-radius: 12px;">
          <div style="background-color: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-top: 4px solid #2563eb;">
            <h2 style="color: #111827; margin-top: 0; font-size: 24px; font-weight: 600;">New Contact Submission</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">You have received a new inquiry from the website contact form.</p>
            
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
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Company:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Service Interest:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 9999px; font-size: 14px; font-weight: 500;">
                    ${service || 'Not provided'}
                  </span>
                </td>
              </tr>
            </table>
            
            <h3 style="color: #374151; font-size: 16px; margin-bottom: 12px;">Message:</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; color: #4b5563; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      `,
    };

    // Auto-reply to Client
    const clientPayload = {
      from: '"NirmataAI Tech Solutions" <info@nirmataai.site>',
      to: email,
      subject: 'Thank you for contacting NirmataAI Tech Solutions',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 40px 20px; border-radius: 12px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #2563eb; text-align: center;">
            <img src="https://nirmataai.site/logo.png" alt="NirmataAI Logo" style="height: 48px; margin-bottom: 24px;" />
            <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">We've received your message!</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px; text-align: left;">
              Hi <strong>${name}</strong>,<br><br>
              Thank you for reaching out to <strong>NirmataAI Tech Solutions</strong>. We have received your inquiry and our team is already reviewing it.
            </p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 24px; border-radius: 8px; text-align: left; margin-bottom: 32px;">
              <h3 style="color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0; margin-bottom: 12px;">Your Message</h3>
              <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0; font-style: italic;">
                "${message.replace(/\n/g, '<br>')}"
              </p>
            </div>
            
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; text-align: left; margin-bottom: 32px;">
              We aim to respond to all inquiries within <strong>24 hours</strong>. If your request is urgent, feel free to reply directly to this email.
            </p>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: left;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong style="color: #374151;">The NirmataAI Team</strong>
              </p>
            </div>
            
            <div style="margin-top: 32px; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Connect with us:</p>
              <a href="https://www.linkedin.com/in/nirmataai-tech-solutions-913625421" style="display: inline-block; margin: 0 8px; color: #2563eb; text-decoration: none; font-weight: 500;">LinkedIn</a>
              <a href="https://www.facebook.com/share/1CoyFwaQSy/" style="display: inline-block; margin: 0 8px; color: #2563eb; text-decoration: none; font-weight: 500;">Facebook</a>
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

    return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
