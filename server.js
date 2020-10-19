const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const uPass = require("./scrt/scrt");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/blog";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on(
  "error",
  console.log.bind(console, "There was an error connecting to the database...")
);
db.once("open", () => {
  console.log("Connected to the database...");
});

// Global variable
let passwordHash;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Module Routes

// Blog routes
const blog = require("./routes/blog");
app.use("/", blog);

// Blog Posts Routes
const blog_posts = require("./routes/blog-posts");
app.use("/blog", blog_posts);

// Home page
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});
app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});

// Projects
app.get("/projects", (req, res) => {
  res.sendFile(`${__dirname}/public/html/projects.html`);
});

// About
app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/public/html/about.html`);
});

// Contact
app.get("/contact", (req, res) => {
  res.sendFile(`${__dirname}/public/html/contact.html`);
});

app.get("/thank-you-for-contacting-me", (req, res) => {
  return res.sendFile(
    `${__dirname}/public/html/thank-you-for-contacting-me.html`
  );
});

app.post("/thank-you", (req, res) => {
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

// Errors
app.get("/404-error", (req, res) => {
  res.sendFile(`${__dirname}/public/html/404-error.html`);
});

app.get("/401-error", (req, res) => {
  res.sendFile(`${__dirname}/public/html/invalid.html`);
});

app.get("/invalid", (req, res) => {
  res.sendFile(`${__dirname}/public/html/404-user-not-found.html`);
});

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Listening on PORT ${Port}...`);
});
