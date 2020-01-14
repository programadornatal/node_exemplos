const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello React');
});

app.listen('3000');