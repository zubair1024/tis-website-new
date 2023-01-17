import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  host: process.env.MAILER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
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
    // from: variables.EMAIL_USERNAME,
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `Website contact form`,
    html: `You got a message from <br/>
        First Name : ${firstName} <br/>
        Last Name: ${lastName} <br/>
        Contact Number: ${contactNumber} <br/>
        Message: ${message}`,
  };

  await transporter.sendMail(mailOption);
}
