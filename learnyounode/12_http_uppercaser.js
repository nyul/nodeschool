var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(
function(request, respond){
	if(request.method === 'POST'){
		request.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(respond);
	}
});

server.listen(port);

/* OFFICIAL
 var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function (req, res) {
   if (req.method != 'POST')
     return res.end('send me a POST\n')

   req.pipe(map(function (chunk) {
     return chunk.toString().toUpperCase()
   })).pipe(res)
 })

 server.listen(Number(process.argv[2]))
 */