var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Página Principal');
});

app.get('/tecnologia', (req, res) => {
    res.send('Página de Tecnologia');
});

app.get('/moda', (req, res) => {
    res.send('Página de Moda');
});

app.listen(3000, () => 
console.log('Servidor escutando na porta 3000'));