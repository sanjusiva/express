var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var PORT = 3000;
let count = 0;

//req.app
app.get('/', function (req, res) {
    count = count + req.app._eventsCount;
    console.log(req.app._eventsCount);
    console.log("Total count: " + count);
    //console.log(req.app)
    res.send("The req.app property holds the reference to the instance of the Express application that is using the middleware.");
});

//req.baseUrl
//http://localhost:3000/request/method

var request = express.Router();
app.use('/request', request);

request.get('/method', (req, res) => {
    if (req.baseUrl == '/request') {
        console.log("shows base url");
        res.end("The req.baseUrl property is the URL path on which a router instance was mounted. ");
    } else {
        console.log("Invalid Request")
        res.send("Invalid Route")
    }
})

//req.cookies
app.use(cookieParser());   
app.get('/cookie', function (req, res) {
  req.cookies.name='Sanju';
  req.cookies.age=21;  
  
  console.log(req.cookies);
  res.send("The req.cookies property is used when the user is using cookie-parser middleware. This property is an object that contains cookies sent by the request."+"<br>Name: "+req.cookies.name+"<br>Age: "+req.cookies.age);
});
   
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
