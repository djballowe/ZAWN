const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51LS2zdD0jwVDhXdCqDmmehGYsQH8ls6ZMhyZAsrU4N1FYspFMrP9BqVCli3U4xvhBkiaLYnFoIfDr0oAkN4QqA2800JjOC3hGH"
);

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

app.get("/payments/create", (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntent.create({
      shipping,
      amount,
      currency: 'usd'
    });

    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404, Not Found.");
});

exports.api = functions.https.onRequest(app);
