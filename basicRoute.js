var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("Got a GET request");
   res.send('Hello GET');
})

app.post('/', function (req, res) {
   console.log("Got a POST request ");
   res.send('Hello POST');
})

app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request");
   res.send('Hello DELETE');
})

app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET pattern request");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
})