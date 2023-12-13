const fs=require('fs');
//readFile
/*fs.readFile("abc.txt",(err,data)=>{
    if(err){
        console.log("error");
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});
console.log("terminated");*/
//=================================================
//writeFile

/*let content="wow this is dynamic content";
fs.writeFile("newfile.txt",content,(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("saved");
    }
});
*/
//===========================================================
//appendFile
let newcontent="this is new added line";
fs.appendFile("abc.txt",newcontent,(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("added");
    }
})

