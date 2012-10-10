
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home', brand: 'ENCODE MetaData' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About', brand: 'ENCODE MetaData' });
};
