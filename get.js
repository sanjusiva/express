var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/files/get.html" );
})

app.get('/process_get', function (req, res) {
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(4000, function () {
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})