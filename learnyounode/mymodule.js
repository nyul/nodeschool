var fs = require('fs');
var path = require('path');

module.exports = function(fpath, type, main_callback){

var callback = function (err, data){
var output = [];
if(err) return main_callback(err);

	for(i = 0; i < data.length; i++){
		if (path.extname(data[i]) === "."+type){
			output.push(data[i]);
		}
	}
	main_callback(null, output);
}

fs.readdir(fpath, callback);

}