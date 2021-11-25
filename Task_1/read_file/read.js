const fs = require("fs");

fs.readFile("hello.txt", "utf8",
            function(error, data){
                console.log("Assinxron o\'qish");
                if(error) throw error;
                console.log(data);
});

console.log("Sinxron o\'qish")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
