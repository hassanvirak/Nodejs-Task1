// Task 19 â€” Automated Email Report (Nodemailer)
//
// Setup:
//   1. npm install
//   2. Enable 2-Step Verification on your Gmail account and create an App Password
//      (Google Account > Security > App passwords).
//   3. Set environment variables (PowerShell):
//        $env:EMAIL_USER="youraddress@gmail.com"
//        $env:EMAIL_APP_PASSWORD="your16charapppassword"
//        $env:EMAIL_TO="receiver@example.com"
//   4. node EmailReport.js
const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_APP_PASSWORD, EMAIL_TO } = process.env;

if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !EMAIL_TO) {
  console.log("Missing configuration. Please set EMAIL_USER, EMAIL_APP_PASSWORD and EMAIL_TO environment variables.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_APP_PASSWORD, // App Password, not the normal account password
  },
});

const studentReport = {
  name: "Ali Raza",
  total: 394,
  percentage: 78.8,
  grade: "A",
};

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_TO,
  subject: `Performance Report - ${studentReport.name}`,
  text:
    `Student Performance Report\n\n` +
    `Name       : ${studentReport.name}\n` +
    `Total Marks: ${studentReport.total}/500\n` +
    `Percentage : ${studentReport.percentage}%\n` +
    `Grade      : ${studentReport.grade}\n\n` +
    `Regards,\nExamination Department`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Email could not be sent:", error.message);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
