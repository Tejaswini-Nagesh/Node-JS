const fs = require("fs");
fs.writeFile("new.txt", "today is an awesome day", (err) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File is created");
  }
});
fs.appendFile("new.txt","plz like ,share and subscribe my channel",(err)=>{
  console.log("task is completed");
});

fs.readFile("new.txt","UTF-8",(err,data)=>{
  console.log(data);
});
