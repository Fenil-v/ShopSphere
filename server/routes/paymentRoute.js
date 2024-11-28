const { Router } = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createPaymentIntent } = require("../controller/paymentController");

const router = Router();

//Profile Update, Get profile

router.post("/create-payment-intent", isAuthenticatedUser, createPaymentIntent);

module.exports = router;
