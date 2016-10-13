var http = require("http"),
 fs = require("fs");
//fs = file system

fs.readFile("./index.html",function(err,html){ 
 http.createServer(function(req,res){
  res.write(html);
  res.end();

 }).listen(8080);
});