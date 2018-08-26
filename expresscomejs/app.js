var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Tudo certo');
});

app.get('/tecnologia', (req, res) => {
    res.render('secao/tecnologia')
});

app.listen('3000', 
() => console.log('Escutando na porta :3000'));