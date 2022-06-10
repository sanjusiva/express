var express=require("express")
var app=express()
var route=express.Router();

//middleware function
const ageFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please give your age")
    }
    else if(req.query.age<18){
        res.send("You are under age")
    }
    else{
        next();
    }
}

//app.use(ageFilter);//app level middleware - checks for all routes
route.use(ageFilter);//router level middleware - checks for only specified routes
app.get('/',(req,res)=>{
    res.send("Hello World!!!")
});
route.get('/data',(req,res)=>{
    var corona={
        death_cases:"1 million",
        treatment:"50 lakhs"
    }
    res.send(corona)
});
app.use('/',route);
app.listen(4000, () => {
	console.log("Server is Running")
})