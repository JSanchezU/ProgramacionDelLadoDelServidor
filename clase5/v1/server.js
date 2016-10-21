var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){
  //console.log(req);
  if (req.url.indexOf("favicon.ico") > 0) {
    return;
  }
  fs.readFile("./inicioSesion.html" , function(err, html){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(html);
    res.end();
    if (req.method === 'POST') {
      var body = "";
      req.on('data', function (viene) { //on : donde encuentra la pagina generandose, donde se hace el post
        body += viene;
      });
      req.on('end', function () {
        console.log('viene: ' + body);
      });
    }
    //json
    // res.writeHead(200, {"Content-Type":"application/json"});
    // res.write(JSON.stringify({
    //   nombre:"Gabriel",
    //   username: "gchava"
    // }));
    res.end();
    console.log("prueba");
  });
}).listen(9090);