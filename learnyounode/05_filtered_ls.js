var fs = require('fs');
var path = require('path');
var callback = function (err, data){
	for(i = 0; i < data.length; i++){
		if (path.extname(data[i]) === "."+process.argv[3]){
			console.log(data[i]);
		}
	}
}
fs.readdir(process.argv[2], callback);

/* OFFICIAL
 var fs = require('fs')
 var path = require('path')

 fs.readdir(process.argv[2], function (err, list) {
   list.forEach(function (file) {
     if (path.extname(file) === '.' + process.argv[3])
       console.log(file)
   })
 })
 */