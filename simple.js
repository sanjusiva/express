var express=require("express")
var app=express()
app.get('/',(req,res)=>{
    res.send("Hello World!!!")
});
app.get('/getName',(req,res)=>{
    var name="Sanju"
    res.send(name)
});
app.listen(4000);