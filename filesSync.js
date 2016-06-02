var fs = require('fs');

if(process.argv.length <= 2)
{
    console.log("Please Include Path to File");
    throw new SyntaxError;
}

var fileName = process.argv[2];
var fileAsString = fs.readFileSync(fileName).toString();
var numNewLines = fileAsString.split("\n").length - 1; //File Doesn't end with New Line

console.log(numNewLines);
