
/*
 * Hide Match.
 */

exports.view = function(req, res){

	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

	for (var i = 0; i < data.diversimatches.length; i++) {
		if (data.diversimatches[i].name == req.query.name) {
			data.diversimatches[i].showConnectionRequest = false;
		}
	}
	
	var json = JSON.stringify(data, null, "\t");

	fs.writeFileSync('data.json', json, 'utf8');
  	res.json(data);
};