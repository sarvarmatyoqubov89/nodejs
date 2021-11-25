const fs = require("fs");

fs.unlinkSync("del1.txt");

fs.unlink("del2.txt", (err) => {
    if (err) console.log(err);
    else console.log("del2.txt was delete");
});