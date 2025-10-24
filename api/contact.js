// File: /api/contact.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Configuration for GoDaddy's email server
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // Your email: support@evikainnovations.com
      pass: process.env.EMAIL_PASS, // Your GoDaddy email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from your website:

    Name: ${name}
    Email: ${email}
    Phone: ${phone}

    Message:
    ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
}
