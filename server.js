const nodemailer = require("nodemailer");
const readlineSync = require("readline-sync");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "balsambashir22@gmail.com",
    pass: "balsam2017#",
  },
});

let mail = readlineSync.question("please Enter Recipient Email ");

let subject = readlineSync.question("please Enter Email Subject ");

let content = readlineSync.question("please Enter Email Content ");

let message = {
  from: "balsambashir22@gmail.com",
  to: mail,
  subject: subject,
  text: content,
};

console.log(message);
transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
