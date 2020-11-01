const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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

// Thank you for contacting me route
const thank_you = require("./routes/thank-you");
app.use("/thank-you", thank_you);

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

const PORT = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
