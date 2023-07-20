import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, amount } = req.body;

    try {
      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          },
        }
      );

      const { data } = response;

      res.status(200).json({
        authorization_url: data.data.authorization_url,
        access_code: data.data.access_code,
      });
    } catch (error) {
      console.log("Payment initiation error:", error);
      res.status(500).json({ message: "Payment initiation failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
