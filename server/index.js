var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

var port = '4000';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.json('works')).post('/', (req, res) => res.json(req.body));

app.listen(port, () => console.log(`works on ${port}`));
