
//Correo: ladoservidor2016@gmail.com
//Contraseña: ladosrv2016
//Podemos usar esta para evitar ver contraseñas de compañeros jeje ;)

var express = require("express");
var app = express();
var path = require('path');
var fs = require('fs');

//Variables globales para la app
var archivoHTML;

//Librerías incluidas en el app
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//para nodemailer
var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://ladoservidor2016%40gmail.com:ladosrv2016@smtp.gmail.com');
 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



//-----------------------------------------FUNCIONES-----------------------------------
function enviarCorreo(mensaje)
{
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '<ladoservidor2016@gmail.com>', // sender address 
	    to: 'javiersanchezugalde@gmail.com', // list of receivers 
	    subject: 'Pago del mes Residencial Flores..', // Subject line 
	    text: mensaje, // plaintext body 
	    html: '<b>' + mensaje + '</b>' // html body 
	};

	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}

//Se encarga de leer el archivo html de forma sincrónica
function leerHTML(archivo)
{
	return fs.readFileSync(__dirname + archivo,'utf8');
}

//-----------------------------------------APLICACION------------------------------
//Primera ejecución del servidor en GET
app.get("/", function(req, res)
{
	//Este primer archivo solo muestra los controles del listado
	archivoHTML = leerHTML('/htmls/correo.html');
	res.send(archivoHTML);
	res.end();
});

//Ejecución de los post de la página
app.post("/", function(req, res)
{
	//Este segundo archivo muestra los controles de listado
	//junto a la etiqueta para reemplazar el html
	//por el listado de las personas generadas.
	archivoHTML = leerHTML('/htmls/correo.html');

	enviarCorreo(req.body.mensaje);

	//Como respuesta se envía el HTML generado con las etiquetas modificadas.
	res.send(archivoHTML);
	res.end();
});

app.listen(8080);