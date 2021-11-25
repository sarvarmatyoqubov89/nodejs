const fs = require("fs");

fs.renameSync("./rename.txt", "./ren1.txt");

fs.rename("./rename2.txt", "./ren2.txt", function(err){
    if (err) console.log("Error:" + err);
});