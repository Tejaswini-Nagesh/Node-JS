const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{

    fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
        console.log(data);
        const objeData=JSON.parse(data);
    })
  // console.log(req.url);
  if(req.url=="/"){
    res.end('Hello fromt the other sides');
  }
    else if(req.url=="/about"){
    res.end("hello from the about us");
    }

    else if(req.url=="/contact"){
    res.end("hello from the contact us ");
    }

    else if(req.url=="/userapi")
    {
        
    }

    else
    {
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("page does not exist");
    }


});
//127.0.0.1 which is eqivalent to localhost
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8080");
})