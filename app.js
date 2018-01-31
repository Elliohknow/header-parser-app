var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// create instance of express for app, instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
// API url
var api = '/api/whodisturbsmyslumber';
app.get(api, (req, res) => {
  console.log('200');
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});