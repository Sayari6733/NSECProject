import nodemailer from 'nodemailer';

// 📦 Google SMTP email transport setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',    // Use Gmail's SMTP server
  port: 465,                 // Port 465 is for secure connections
  secure: true,              // Use SSL for secure connection
  auth: {
    user: process.env.EMAIL_USER,  // Use the email from your .env file
    pass: process.env.EMAIL_PASS,     // Use the app password from your .env file
  },
});

// Verify if the transporter is working
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transport error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});
