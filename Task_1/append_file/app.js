const fs = require("fs");

fs.appendFileSync("append.txt", "Salom!");

fs.appendFile("append.txt", " Salom Dunyo!", function(error){
    if(error) throw error;
    console.log("Faylga qoshimcha yozuv qo'shildi. Fayldagi yozuv:");
    let data = fs.readFileSync("append.txt", "utf8");
    console.log(data);
})