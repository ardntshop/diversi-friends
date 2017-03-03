
/*
 * GET Requests Page.
 */

 var data = require('../data.json');

exports.view = function(req, res){
  res.render('requests', data);
};




/* if
	
	decline request button = clicked

	then

	remove profile from requests screen

	else

	leave profile alone
*/
