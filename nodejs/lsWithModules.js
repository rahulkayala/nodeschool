var filterDirectory = require('./dirFilter');

filterDirectory(process.argv[2], process.argv[3], function(err, fileList){
  if(err) {
      console.log(err); 
      throw err;
    }
  fileList.forEach(function(element) {console.log(element);});  
});