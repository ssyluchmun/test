var express = require("express"),
app = express();

var request = require("request");

// request({
//   uri: "http://www.sitepoint.com",
//   method: "GET",
//   timeout: 10000,
//   followRedirect: true,
//   maxRedirects: 10
// }, function(error, response, body) {
//   console.log(body);
// });

var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

require('./apihandler')(app);
app.listen(port);

require("cf-deployment-tracker-client").track();



