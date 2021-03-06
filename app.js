var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');
var port = process.env.PORT || 3000;
// create instance of express for app, instantiate bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

// API url
var api = '/api/whoami';

app.get(api, function (req, res, next) {
  var lang = req.acceptsLanguages();
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
  var ipaddress = req.ip;

  res.json({'IPaddress': ipaddress, 'language': lang[0], 'software': software});
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = {app};