var fs = require('fs');
var path = require('path');

var filterDirectory = function (dirPath, fileFilter, callback){
     
     fs.readdir(dirPath, function (err, fileList) {
         if (err) { return callback(err, null);}
         
         var prunedList = fileList.filter(function (file) {
             return path.extname(file) === "." + fileFilter;
         });
         
         return callback(null, prunedList);
     }) 
     
}

module.exports = filterDirectory;