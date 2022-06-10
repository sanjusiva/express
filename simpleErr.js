var express=require("express")
var app=express()

app.get('/',(req,res)=>{
    var err=new Error("Something went wrong")
    console.log("GET: "+err)
    next(err)
});

app.use((err,req,res,next)=>{
    console.log("USE: "+err);
    res.status(500);
    res.send("Oops,Something went wrong")
});

app.listen(5000,()=>{
    console.log("Server is listening to port 5000");
})