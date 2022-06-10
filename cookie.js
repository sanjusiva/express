var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.cookie('name', 'Sanjitha',{maxAge: 360000}) //Sets name 
   res.clearCookie('age');
   res.send('cookie set');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});