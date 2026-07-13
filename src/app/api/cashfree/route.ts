import { NextResponse } from 'next/server';

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

    const order_id = `order_internship_${Date.now()}`;

    const body = {
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
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nirmataai.site'}/careers?order_id={order_id}`
      }
    };

    const response = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cashfree Order API Error:', JSON.stringify(data, null, 2));
      return NextResponse.json(
        { error: `Cashfree error: ${data.message || JSON.stringify(data)}` },
        { status: response.status }
      );
    }

    return NextResponse.json({
      payment_session_id: data.payment_session_id,
      order_id: data.order_id
    }, { status: 200 });
  } catch (error: any) {
    console.error('Cashfree Order API Error:', error);
    return NextResponse.json(
      { error: `Failed to create Cashfree order: ${error.message}` },
      { status: 500 }
    );
  }
}
