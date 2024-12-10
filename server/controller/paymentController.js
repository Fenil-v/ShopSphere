const stripe = require("stripe")(
  process.env.STRIP_KEY
);

export async function createPaymentIntent(req, res, next) {
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "INR",
      //   payment_method_types: ["card"],
      description: "Placing order on website",
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error making payment:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
}
