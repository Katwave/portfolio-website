const express = require("express");
const router = express.Router();

const articles = require("../articles/articles");
const ArticlesRequests = require("../articles/validate_article_requests");

router.get(`/:id`, (req, res) => {
  const blogs = new ArticlesRequests(req, articles, res);
  blogs.validate_article_req();
});

module.exports = router;
