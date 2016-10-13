var http = require("http");

var manejador = function(solicitud, respuesta) {

	respuesta.end("hola mundo");
	console.log("Se ha recibido una peticion");
};
var servidor = http.createServer(manejador);

servidor.listen(8080);
