const fs = require("fs");

fs.writeFile("write.txt", "Salom dunyo!", function(error){
    if(error) throw error;
    console.log("Fayldagi yozuv:");
    let data = fs.readFileSync("write.txt", "utf8");
    console.log(data);
});