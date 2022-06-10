const express = require("express");
const app = express()

// ist Middleware
app.use("/", (req, res, next) => {
    res.send("This is 1st middleware")
	console.log("Hello");
	next();
})

// 2nd middleware 
app.get("/", (req, res, next) => {
	console.log("Get Request")
})

app.get("/d", (req, res) => {
	console.log("dd")
})

app.listen(3000, () => {
	console.log("Server is Running")
})


//next() : It will run or execute the code after all the middleware function is finished. 