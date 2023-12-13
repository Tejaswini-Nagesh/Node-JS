const url=require("url");
const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    const path=req.url
    if(path=='/about')
    {
        console.log("about page");
    }
    else if(path=="/"){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const fileContent=fs.readFileSync("./views/home.html");
        res.write(fileContent);
        res.end();
        console.log("Home page");
    }
    else if(path=="/services"){
        res.writeHead(200,{
            "content-type":"text/html",

        });
        const fileContent=fs.readFileSync("./views/services.html");
        res.write(fileContent);
        res.end();
    }
}).listen(8082);