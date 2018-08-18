var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('Olá Noje.js');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
