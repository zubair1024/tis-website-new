import nodeMailer from "nodemailer";
import variables from "./variables";

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.PASSWORD,
  },
});

export async function sendMessage({
  firstName,
  lastName,
  contactNumber,
  message,
}: {
  firstName: string;
  lastName: string;
  contactNumber: string;
  message: string;
}) {
  const mailOption = {
    from: variables.EMAIL_USERNAME,
    to: variables.TO_EMAIL,
    subject: `Website contact form`,
    html: `You got a message from 
        First Name : ${firstName}
        Last Name: ${lastName}
        Contact Number: ${contactNumber}
        Message: ${message}`,
  };

  await transporter.sendMail(mailOption);
}
