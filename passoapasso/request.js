var http = require('http');

var server = http.createServer(function(req, res){
	var categoria = req.url;
	var texto = "";
	switch(categoria) {
		case '/tecnologia': texto = "Página de Tecnologia"; break;
		case '/moda': texto = "Página de Moda"; break;
		default: texto = "Pagina Principal"; break;
	}

	res.end('<html><body>' + texto + '</body></html>')
});

server.listen(3000);