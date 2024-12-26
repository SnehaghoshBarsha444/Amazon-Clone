import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../type";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXTAUTH_URL) {
  throw new Error("Missing required environment variables: STRIPE_SECRET_KEY or NEXTAUTH_URL.");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { items, email } = req.body;

    if (!items || !email) {
      return res.status(400).json({ error: "Missing required fields: items or email." });
    }

    // Map the items to Stripe format
    const modifiedItems = items.map((item: StoreProduct) => ({
      quantity: item.quantity,
      price_data: {
        currency: "inr",
        unit_amount: item.price * 10 * 100, // Adjust your logic if needed
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["IN", "US", "OM", "CA", "GB"],
      },
      line_items: modifiedItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: any) => item.image)),
      },
    });

    // Send the session ID as a response
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    res.status(500).json({ error: "Failed to create Stripe session. Please try again later." });
  }
}
