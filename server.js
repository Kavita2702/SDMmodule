const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.sendFile("./public/index.html",{root:__dirname})

});
app.listen(9832);
console.log("server is running on port:9832");