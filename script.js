function encriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoencriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".output-encriptado").value = textoencriptado;
}

var boton1 = document.querySelector("#encriptar");
boton1.onclick = encriptar;

function desencriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textodesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/imes/gi, "i");
  document.querySelector(".output-encriptado").value = textodesencriptado;
}

var boton2 = document.querySelector("#desencriptar");
boton2.onclick = desencriptar;

function copiar() {
  var contenido = document.querySelector(".output-encriptado");
  contenido.select();
  document.execCommand("copy");
}

var boton3 = document.querySelector("#copiar");
boton3.onclick = copiar;
