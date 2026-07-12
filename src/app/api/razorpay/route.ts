import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const { amount, currency = "INR" } = await req.json();

    if (!amount) {
      return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Razorpay keys are not configured in environment variables' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // Amount in paisa (49 * 100 = 4900)
      currency,
      receipt: `receipt_internship_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ order, key_id: process.env.RAZORPAY_KEY_ID }, { status: 200 });
  } catch (error: any) {
    console.error('Razorpay Order API Error:', error);
    return NextResponse.json(
      { error: 'Failed to create Razorpay order' },
      { status: 500 }
    );
  }
}
