object.onclick = function(){xd};
function myFunction() {
  document.getElementById("xd");
  var mami = prompt("¿Cuál es tu nombre?(por favor solo escriba el primer nombre)")

  
 if (mami=="silvia") {
  document.write("Espera un momento")
  setTimeout("location.href='step2.html'", 5000)
  document.write("<a href='step2.html'>presiona aquí para continuar</a>")
}
else if (mami=="Silvia") {
 document.write("Espera un momento")
 setTimeout("location.href.='step2.html'", 5000)
 document.write("<a href='step2.html'>presiona aquí para continuar</a>")
}
else {
("<style>body{color=#a0d9c5}</style>");
document.write("<center><h1>Lo siento</h1></center>");
document.write("El nombre no coincide con el nombre de mi mamá :(");
document.write("<strong> INTENTA DE NUEVO</strong>");
document.write('<center><img src="sad.png"/></center>');

}

}

