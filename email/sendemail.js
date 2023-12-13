const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "SUBSCRIBE_TO_THAPATECHNCIAL",
      pass: "SHARE_WITH_FRIENDS",
    },
  });

  let info = await transporter.sendMail({
    from: '"Tejaswini Nagesh" <tejunagesh99@gmail.com>', // sender address
    to: "tejunagesh@gmail.com", // list of receivers
    subject: "Hello Teju", // Subject line
    text: "Hello email", // plain text body
    html: "<b>Hello email</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;