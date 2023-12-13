const fs=require('fs');
const http=require('http');

const server=http.createServer();
    /*fs.readFile('input.txt',(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    
    });
});
*/
//2nd way
//reading from stream
//create a readlbe stream
//handle stream events->data,end and error
server.on('request',(req,res)=>{

/*const rstream=fs.createReadStream('inputs.txt');
rstream.on('data',(chunkdata)=>{
    res.write(chunkdata)
});
rstream.on('end',()=>{
    res.end();
})
rstream.on('error',(err)=>{
    console.log(err);
    res.end("file not found");
})
*/
const rstream=fs.createReadStream("input.txt");
rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");