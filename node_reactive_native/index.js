const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({projeto:'Hello React'});
});

app.get('/teste', (req, res) => {
    res.send('Recebeu o teste');
});

app.use((req, res) => {
    res.status(404).send('Essa página não existe! :)');
});

app.listen('3000');