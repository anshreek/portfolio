
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// MySQL database connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Portfolio",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL Database:", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: 'anshreekakde86@gmail.com', // Your email
    pass: 'keby xuoy vemr eutm' // Your email password or app password
  }
});

// Endpoint to handle form submission
app.post('/api/contact', (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  // SQL insert query
  const query = 'INSERT INTO portfolio (firstname, lastname, email, text) VALUES (?, ?, ?, ?)';
  db.query(query, [firstname, lastname, email, message], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: 'Error inserting data' });
    }

    // Set up email data
    const mailOptions = {
      from: 'anshreekakde86@gmail.com', // sender address
      to: 'anshreekakde86@gmail.com', // list of receivers
      subject: ' Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #4a90e2; margin-bottom: 15px;"> Contact Form Submission</h2>
          <p style="font-size: 16px; margin: 0 0 15px;">You have received a new message from your contact form.</p>
          
          <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff;">
            <p style="font-size: 14px; color: #555;"><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p style="font-size: 14px; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4a90e2; text-decoration: none;">${email}</a></p>
            <p style="font-size: 14px; color: #555;"><strong>Message:</strong><br>${message}</p>
          </div>
          
          <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #999;">
            <p style="margin: 0;">This email was sent from your website contact form</p>
          </footer>
        </div>
      `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: 'Error sending email' });
      }
      res.status(201).json({ message: 'Data inserted and email sent successfully', results });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
