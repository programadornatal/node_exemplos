const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({projeto:'Hello React'});
});

app.listen('3000');