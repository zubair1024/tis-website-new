// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMessage } from "@/utils/mailer";
import { IContactDetails } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const body: IContactDetails = req.body;
    if (
      !body.firstName ||
      !body.lastName ||
      !body.contactNumber ||
      !body.message
    ) {
      return res.status(400).json({ message: "Missing fields" });
    }

    await sendMessage(body);

    return res.status(200).json({ message: "Message Sent" });
  }
  res.status(200).json({ message: "Yeah I exist" });
}
