
/*
 * GET Requests Page.
 */

 var data = require('../data.json');

exports.view = function(req, res){
  res.render('requests', data);
};
