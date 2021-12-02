class NewsController {
  //[GET] tro vao news
  index(req, res) {
    res.render('news');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('Show Detail!!!');
  }
}

module.exports = new NewsController();
