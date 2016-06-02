var fs = require('fs');

if(process.argv.length <= 3)
{
    console.log("\n******** Please Include Path to Directory & Filter Parameter ********\n");
    throw new SyntaxError;
}

var dirPath = process.argv[2];
var fileFilter = "." + process.argv[3];


function fileExtension(filename)
{
    return filename.endsWith(fileFilter);
}

var processFileList = function (err, files){
    files.filter(fileExtension).forEach(function(element) {
        console.log(element);
    }, this);
    
}

fs.readdir(dirPath, processFileList);
