class ArticlesRequests {
  constructor(req, articles, res) {
    this.req = req;
    this.articles = articles;
    this.res = res;
  }
  validate_article_req() {
    if (this.req.params.id === this.articles[0].id) {
      return this.res.render(`./posts/${this.articles[0].page}`);
    } else if (this.req.params.id === this.articles[1].id) {
      return this.res.render(`./posts/${this.articles[1].page}`);
    } else if (this.req.params.id === this.articles[2].id) {
      return this.res.render(`./posts/${this.articles[2].page}`);
    } else {
      return this.res.render(`404-error`);
    }
  }
}

module.exports = ArticlesRequests;
