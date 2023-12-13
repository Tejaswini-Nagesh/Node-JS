const express=require("express");
const app=express();
let PORT=5000;
const sendemail=require("./sendemail");
app.get("/",(req,res)=>{
    res.send("I am a server");
});
app.get("/sendmail",sendemail);
const start=async()=>{
    try{
        app.listen(5000,()=>{
            console.log("i am live in port no.5000");
        })
    }
    catch(error){

    }
};
start();