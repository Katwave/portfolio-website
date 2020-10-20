const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const uPass = require("../scrt/scrt");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const output = `
    <div style="background: rgb(0, 15, 24);padding:20px">
      <h1 style="
      background: rgb(0, 15, 24);
      font-weight: 400;
      color:#fff;
      padding: 5px;
      display:flex;
      justify-content: center;
      align-items: center;"> New message from: </h1>
  
      <h1 style="
      background: rgb(0, 15, 24);
      font-weight: 400;
      color:#fff;
      padding: 5px;
      display:flex;
      justify-content: center;
      align-items: center;"> ${email} </h1>
  
      <h2 style="background: rgb(0, 157, 255);
      font-weight: 400;
      padding: 5px;
      align-self: flex-start;"> Name: <br/> ${name} </h2><br/>
  
      <p style="font-size: 20px;
      color:#fff;
      border-bottom: 3px solid rgb(0, 157, 255);
      padding: 12px;"
      > Message: <br/> ${message} </p>
      </div>
      `;

  const Transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "katlegokatwavebeats@gmail.com",
      pass: uPass.uPass,
    },
  });

  const mailOptions = {
    to: "katlegokatwavebeats@gmail.com",
    from: email,
    subject: "E-mail from " + name + " through your website...",
    html: output,
  };

  Transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(404);
      return res.redirect("/404-error");
    } else {
      console.log(info);
      return res.redirect("/thank-you-for-contacting-me");
    }
  });
});

module.exports = router;
