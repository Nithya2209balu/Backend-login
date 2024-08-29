const express = require("express")

const app=express()

var uname = "nithya"
var pass = "123"

app.get("/name",function(req,res){
    console.log(req.query.username)
    console.log(req.query.password)

    if(uname==req.query.username && pass==req.query.password)
    {
        res.send("Login Successfull")
    }

    else
    {
        res.send("Login failed")
    }
    res.send("nithya")
})

app.listen(3000,function(){
    console.log("server started..")
})
