// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, countryCode, phone, message, cancellationPolicy } =
      req.body;

    // Create a transporter (using Gmail here, you can also use SMTP / other services)
    const transporter = nodemailer.createTransport({
      service: "gmail", // if Gmail, otherwise use host, port, secure
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "yourcompany@example.com", // replace with your recipient
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Cancellation Policy:</strong> ${cancellationPolicy}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email" });
  }
}
