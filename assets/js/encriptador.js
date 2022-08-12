let inputTexto = document.getElementById("input-texto");
let outputResultado = document.getElementById("output-texto");
let btnEncriptar = document.getElementById("btn-encriptar");
let btnDesencriptar = document.getElementById("btn-desencriptar");
let btnCopiar = document.getElementById("btn-copy");
const soloLetras = "^[a-z !ñ]+$";

function encriptar() {
  outputResultado.value = "";
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("e", "enter");
      palabra = palabra.replaceAll("i", "imes");
      palabra = palabra.replaceAll("a", "ai");
      palabra = palabra.replaceAll("o", "ober");
      palabra = palabra.replaceAll("u", "ufat");

      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(" ");

    outputResultado.value = resultado;
  } else {
    mostrarError(
      "No Puede estar el campo vacio y solo se permiten letras minúsculas, sin acentos"
    );
    return;
  }
}

function desencriptar() {
  outputResultado.value = "";
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("enter", "e");
      palabra = palabra.replaceAll("imes", "i");
      palabra = palabra.replaceAll("ai", "a");
      palabra = palabra.replaceAll("ober", "o");
      palabra = palabra.replaceAll("ufat", "u");
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(" ");

    outputResultado.value = resultado;
  } else {
    mostrarError(
      "No Puede estar el campo vacio y solo se permiten letras minúsculas, sin acentos"
    );
    return;
  }
}

function mostrarError(mensaje) {
  alert(mensaje);
}

function copiarTexto() {
  const mensaje = outputResultado.value;

  navigator.clipboard.writeText(mensaje);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;
