const express = require("express");
const router = express.Router();

// // Blog

// const articles = [
//     {
//       title: "Where to learn web development?",
//       description: "Places and resources available to learn web development",
//       createdAt: "03 0ctober 2020",
//       url: "/blog/Where-to-learn-web-development?",
//     },
//     {
//       title: "Learn CSS GRID Layout",
//       description: "Learn how to make your websites responsive with CSS GRID",
//       createdAt: "03 0ctober 2020",
//       url: "/blog/Learn-CSS-GRID-Layout",
//     },
//     {
//       title: "Overcome fear of Rejection",
//       description: "Learn how to overcome your fear of rejection",
//       createdAt: "03 0ctober 2020",
//       url: "/blog/Overcome-fear-of-Rejection",
//     },
//   ];

const articles = require("../articles/articles");
const blog_search_regx = require("../articles/search");

  
  let search_articles;
  
  router.get("/blog", async (req, res) => {
    res.render("blog", { articles: articles });
  });
  
  // Search results
  
  router.get("/search-results", async (req, res) => {
    const s = req.query.s;
    for (let i = 0; i < blog_search_regx.search.length; i++) {
      if (blog_search_regx.search[i].test(s)) {
        search_articles = await blog_search_regx.s_result[i];
        break;
      } else if (!blog_search_regx.search[i].test(s)) {
        search_articles = await blog_search_regx.no_result_found[0];
      }
    }
    res.render("search-results", { searchArticles: search_articles });
  });

module.exports = router;
