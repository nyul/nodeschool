var http = require ('http');
var bl = require('bl');
var url = process.argv[2];

var blist = new bl();

var callback = function(response){
	response.pipe(bl(function (err, data) {
	data = data.toString();
	console.log(data.length);
	console.log(data);	
	}));
}

http.get(url, callback);


/* OFFICIAL
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/