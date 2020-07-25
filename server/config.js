// const nodemailer = require("nodemailer");
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   secure: false,
//   port: 25,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  name: process.env.SERVICE,
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER, // your email address to send email from
    pass: process.env.PASSWORD, // your gmail account password
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = transporter;
