
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const app = await prisma.internApplication.create({
      data: {
        name: "Test User",
        email: "test@example.com",
        role: "Frontend Development",
        message: "Test message",
        paymentId: "test_pay_id",
        paymentOrderId: "test_order_id",
        paymentStatus: "PAID"
      }
    });
    console.log("Successfully created:", app);
  } catch (err) {
    console.error("Prisma error:", err);
  } finally {
    await prisma.$disconnect();
  }
}
test();
