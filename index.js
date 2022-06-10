var express = require("express");  
var app = express();

var user=require('./routes/details');
app.use('/details',user);//for modular approach


//listen Port
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});