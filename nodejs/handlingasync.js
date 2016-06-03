const commandLineOffset = 2;
const numRequests = 3;

var http = require('http');
var bl = require('bl');

var uris = process.argv.slice(commandLineOffset);
var responseCompleted = [];
var responses = [];
var printIdx = 0;

function printResponse(){
    
     if(responseCompleted[printIdx] == 1){
        console.log(responses[printIdx]);
        printIdx += 1;
    }
}

uris.forEach((uri) => {
    var idx = uris.indexOf(uri);
    responses[idx] = "";
    responseCompleted[idx] = 0;
    
    http.get(uri, (response) => {
       response.pipe(bl(function(err,data){
           responses[idx] += data.toString();
           responseCompleted[idx] = 1;
           printResponse();
       })); 
    });
});
