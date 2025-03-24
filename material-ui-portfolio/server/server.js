const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter (use App Password instead of your actual password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use an App Password, NOT your actual password
  },
});

// Endpoint to handle form submission
app.post("/send-email", async (req, res) => {
  console.log("Received request:", req.body);
  const { name, email, message } = req.body;

  // Email content for user
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email
    to: email, // Send email to the user who submitted the form
    subject: `Thank You for Contacting Us, ${name}!`,
    text: `Hello ${name},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nThanks for using my Portfolio!\n\nBest Regards,\nAnanth Ezhumalai`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully to user.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message: " + error.toString());
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
