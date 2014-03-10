var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];
var src = fs.createReadStream(path,{encoding:'utf-8'});

var server = http.createServer(function (request, response){
	src.pipe(response)
});

server.listen(port);

/* OFFICIAL
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/