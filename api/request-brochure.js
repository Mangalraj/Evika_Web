//api/request-brochure.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // --- MODIFIED: Added 'reason' field ---
  const { name, email, company, reason, productName } = req.body;

  // Basic validation including the new 'reason' field
  if (!name || !email || !reason || !productName) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // --- MODIFIED: Updated email body to include the reason ---
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Brochure Request for: ${productName}`,
    html: `
      <h2>New Brochure Request</h2>
      <p>A new lead has requested the brochure for <strong>${productName}</strong>.</p>
      <hr>
      <h3>Lead Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company || 'Not provided'}</li>
      </ul>
      <h3>Reason for Request:</h3>
      <p>${reason}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    // --- MODIFIED: Updated success response (no download path) ---
    res.status(200).json({ 
      success: true, 
      message: "Request received successfully!",
    });

  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
}
