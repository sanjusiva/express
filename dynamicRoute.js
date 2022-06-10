var express=require("express")
var app=express()
app.get('/',(req,res)=>{
    res.send("Hello World!!!")
});
app.get('/update/:id',(req,res)=>{
    res.send("ID : "+req.params.id)
});
app.get('/update-name/:name/:age',(req,res)=>{
    res.send("Name: "+req.params.name+" Age: "+req.params.age);
});
app.get('/update-regex/:id([0-9]{3})',(req,res)=>{
    res.send("ID: "+req.params.id);
});
app.get('*',(req,res)=>{
    errObj={
        statusCode:404,
        statusMsg:"URL NOT FOUND"
    }
    res.send(errObj);
});
app.listen(4000);