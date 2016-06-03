var http = require('http');

var uri = process.argv[2];;

http.get(uri, function(response){
    
    response.setEncoding("utf8");
    
    var body = "";
    response.on("data", function(chunk){
        body += chunk;
    });
    
    response.on("error", console.error);
    
    response.on("end", function(){
        console.log(body.length);
        console.log(body);
    });
    
}).on("error", console.error);