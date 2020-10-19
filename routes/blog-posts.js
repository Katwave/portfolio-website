const express = require("express");
const router = express.Router();

const articles = require("../articles/articles");
const articles_id = require("../articles/articles-id");

router.get(`/:id`, (req, res) =>{
    if(req.params.id === articles[0].id){
        return res.render(`./posts/${articles[0].page}`);
     }
     else if(req.params.id === articles[1].id){
        return res.render(`./posts/${articles[1].page}`);
     }
     else if(req.params.id === articles[2].id){
        return res.render(`./posts/${articles[2].page}`);
     }
     else{
        return res.render(`404-error`);
     }
});

module.exports = router;
