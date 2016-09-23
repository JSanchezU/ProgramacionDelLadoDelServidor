window.alert("Hola nuevo usuario!");

/*var body = document.getElementsByTagName('body'),
	bntRedirecciona = document.createElement("a"),
	bntRedireccionaInfo = document.createTextNode("Google"),
	bntDato = document.createElement("a"),
	bntRedireccionaInfo = document.createTextNode("Enviar");

	body.appendChild(bntRedirecciona);
	bntRedirecciona.appendChild(bntRedireccionaInfo);



	bntRedirecciona.setAttribute("id", "otraVentana");*/
 

    document.getElementById("otraVentana").onclick = function () { 
    	window.location = "http://www.google.com";
    };