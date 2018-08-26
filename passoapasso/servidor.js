var http = require('http');

var server = http.createServer(function(req, res){
	res.end("<html><body>Olá tudo bem</body></html>")
});

server.listen(3000);