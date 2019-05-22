/* GET 'about' page */
module.exports.about = (req, res) => {
  res.render('index', {title: 'About'});
};