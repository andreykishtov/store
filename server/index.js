var express = require('express');
var app = express();

var port = '4000';

app.get('/', (req, res) => res.json('works')).post('/', (req, res) => res.json('post'));

app.listen(port, () => console.log(`works on ${port}`));
