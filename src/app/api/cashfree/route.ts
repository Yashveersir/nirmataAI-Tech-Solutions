import { NextResponse } from 'next/server';
import { Cashfree, CFEnvironment } from 'cashfree-pg';

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR", customer_details } = await req.json();

    if (!amount) {
      return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
    }

    if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Cashfree keys are not configured in environment variables' },
        { status: 500 }
      );
    }

    const appId = process.env.CASHFREE_APP_ID.replace(/"/g, '');
    const secretKey = process.env.CASHFREE_SECRET_KEY.replace(/"/g, '');

    (Cashfree as any).XClientId = appId;
    (Cashfree as any).XClientSecret = secretKey;
    (Cashfree as any).XEnvironment = CFEnvironment.PRODUCTION; // Switch to SANDBOX for testing

    const order_id = `order_internship_${Date.now()}`;
    
    // Cashfree order request body
    const request = {
      order_amount: amount,
      order_currency: currency,
      order_id: order_id,
      customer_details: {
        customer_id: `cust_${Date.now()}`,
        customer_phone: customer_details?.phone || "9999999999",
        customer_email: customer_details?.email || "test@test.com",
        customer_name: customer_details?.name || "Test User"
      },
      order_meta: {
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/careers?order_id={order_id}`
      }
    };

    const response = await (Cashfree as any).PGCreateOrder("2023-08-01", request);

    return NextResponse.json({ 
      payment_session_id: response.data.payment_session_id, 
      order_id: response.data.order_id 
    }, { status: 200 });
  } catch (error: any) {
    console.error('Cashfree Order API Error:', error?.response?.data || error);
    return NextResponse.json(
      { error: 'Failed to create Cashfree order' },
      { status: 500 }
    );
  }
}
