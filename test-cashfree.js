require('dotenv').config();
const { Cashfree, CFEnvironment } = require('cashfree-pg');

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = CFEnvironment.PRODUCTION;

const request = {
  order_amount: 49,
  order_currency: "INR",
  order_id: `test_order_${Date.now()}`,
  customer_details: {
    customer_id: `cust_${Date.now()}`,
    customer_phone: "9999999999",
    customer_email: "test@example.com",
    customer_name: "Test User"
  },
  order_meta: {
    return_url: "http://localhost:3000/careers?order_id={order_id}"
  }
};

async function test() {
  try {
    const res = await Cashfree.PGCreateOrder("2023-08-01", request);
    console.log("Success:", res.data);
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err);
  }
}
test();
