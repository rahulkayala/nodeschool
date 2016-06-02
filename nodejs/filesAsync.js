var fs = require('fs');

if(process.argv.length <= 2)
{
    console.log("Please Include Path to File");
    throw new SyntaxError;
}

var processContents = function (err, fileString) {
    console.log(fileString.split("\n").length - 1);
}

var fileName = process.argv[2];
var fileAsString = fs.readFile(fileName, "utf8", processContents)
