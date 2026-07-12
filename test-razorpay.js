const crypto = require('crypto');
const secret = "dU7XKWyxqMAPjsCb7crEbKWT";
const order_id = "order_mock123";
const payment_id = "pay_mock123";

const signature = crypto.createHmac('sha256', secret)
  .update(order_id + '|' + payment_id)
  .digest('hex');

console.log(JSON.stringify({
  name: "Test",
  email: "test@test.com",
  role: "Frontend",
  message: "test",
  razorpay_order_id: order_id,
  razorpay_payment_id: payment_id,
  razorpay_signature: signature
}));
