var express = require('express');
var app = express(); 
var PORT = 3000;
  
//res.app
app.get('/', function (req, res) {
    console.log(res.app.get('views'));
    console.log(res.app.get('etag'));
    console.log(res.app);
    res.end("The res.app property holds a reference to the instance of the Express application that is using the middleware.");
});
  
//res.headerSent
app.get('/send', function (req, res) {
    // Before res.send()->console->false
    res.send('The res.headersSent property is a boolean property that indicates if the app sent HTTP headers for the response.'); 
    console.log(res.headersSent); 
});

//res.append
app.use('/append', function(req, res, next){
    res.append('Warning', '201 Its a Warning');
    next();
}) 
app.get('/append', function(req, res){
    console.log(res.get('Warning'));
    res.send(`The res.append() function appends the specified value to the HTTP response header field and if the 
    header is not already set then it creates the header with the specified value. `);
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


