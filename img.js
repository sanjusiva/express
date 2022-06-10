var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/img', function (req, res) {
   res.sendFile( __dirname + "/public/images/expressLogo.jpg" );
})

var server = app.listen(8080, function () {
   var port = server.address().port

   console.log("Example app listening at http://localhost:%s", port)
})