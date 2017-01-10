var gzippo = require('gzippo');
var express = require('express');
var logfmt = require('logfmt');
var app = express();

app.use(logfmt.requestLogger());
app.use(gzippo.staticGzip('' + __dirname + '/www'));

var port = Number(process.env.PORT || 8080);

app.listen(port, function() {
  console.log('Listening on ' + port);
});
