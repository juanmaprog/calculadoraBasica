let penultimoBoton = "";
let ultimoBoton = "";
let ultimoOperador = "";
let arr = [];
let arrOperadores = ["+", "-", "x", "/", "%"];

const display = document.getElementById("display");

// FUNCIONES
function setDisplayValue(value) {
  if (display.innerText == "0") {
    display.innerText = "";
    ultimoBoton = "";
  }

  if (ultimoOperador == "") {
    display.innerText = display.innerText + value;
    return;
  } else {
    display.innerText = value;
    return;
  }
}

function getDisplay() {
  if (display.innerText == "0") {
    display.innerText = "";
  }
  return display.innerText;
}

function calcular() {
  let operadora = parseFloat(ultimoBoton);
  let operadorb = parseFloat(getDisplay());

  console.log(operadora);
  console.log(operadorb);

  if (ultimoOperador == "+") {
    let result = operadora + operadorb;
    display.innerText = result;
  }
}

function resetDisplay() {
  ultimoBoton = "";
  ultimoOperador = "";
  display.innerText = "0";
  arr = [];
}

function arrLastIsOperador() {
  let lastValue = arr[arr.length - 1];

  if (arrOperadores.includes(lastValue)) {
    return true;
  } else {
    return false;
  }
}

function addOperador(operador) {
  if (arrLastIsOperador()) {
    arr[arr.length - 1] = operador;
  }

  arr.push(getDisplay());
  arr.push(operador);
}

function isOperador(value) {
  if (arrOperadores.includes(value)) {
    return true;
  } else {
    return false;
  }
}

function setResultado() {
  let result = parseFloat(0);
  let valor = 0;
  let operador = "";

  console.log(ultimoOperador);

  if (arr.length == 0) return;

  if (arrLastIsOperador()) {
    arr.splice(arr.length - 1, 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (isOperador(arr[i]) == false) {
      if (operador == "" || operador == "+") {
          
        result = result + parseFloat(arr[i]);
      } else if (operador == "-") {
        result = result - parseFloat(arr[i]);
      } else if (operador == "x") {
        result = result * parseFloat(arr[i]);
      } else if (operador == "/") {
        result = result / parseFloat(arr[i]);
      } else if (operador == "%") {
        // result = result * parseFloat(arr[i]);
      }
    } else {
      operador = arr[i];
    }
  }

  display.innerText = result;
  arr = [result];
}

function setValueBoton(value) {
  if (arrOperadores.includes(value)) return;

  if (ultimoOperador == "") {
    display.innerText = getDisplay() + value;
    return;
  }

  penultimoBoton = getDisplay();
  ultimoOperador = "";
  display.innerText = "";
  display.innerText = getDisplay() + value;
}

// EVENTOS onclick BOTONES

// onclick PRIMER BLOQUE
function reset() {
  resetDisplay();
}

function cambiarSigno() {
  console.log("cambiar signo");
  console.log(display.innerText);

  ultimoOperador = "+-";

  // VALIDACIÓN
  {
    // Si es "" ó es "0", no continuar.
    if (display.innerText == "" || display.innerText == "0") {
      return;
    }

    // Si la longitud de la cadena es menor de 2 caracteres, no continuar.
    if (display.innerText.length < 1) {
      return;
    }
  }

  // Si el primer caracter es "-", no continuar
  if (display.innerText.substring(0, 1) == "-") {
    display.innerText = display.innerText.replace("-", "");
  } else {
    display.innerText = "-" + display.innerText;
  }
}

function porcentaje() {
  ultimoOperador = "%";
  setDisplayValue("%");
}

function dividir() {
  if (ultimoOperador == "/") return;

  addOperador("/");
  ultimoOperador = "/";
  setResultado();
  arr.push("/");
}

// onclick SEGUNDO BLOQUE
function clickSiete() {
  setValueBoton("7");
}

function clickOcho() {
  setValueBoton("8");
}
function clickNueve() {
  setValueBoton("9");
}
function clickMultiplicar() {
  if (ultimoOperador == "x") return;

  addOperador("x");
  ultimoOperador = "x";
  setResultado();
  arr.push("x");
}

// onclick TERCER BLOQUE
function clickCuatro() {
  setValueBoton("4");
}

function clickCinco() {
  setValueBoton("5");
}

function clickSeis() {
  setValueBoton("6");
}

function clickRestar() {
  if (ultimoOperador == "-") return;

  addOperador("-");
  ultimoOperador = "-";
  setResultado();
  arr.push("-");
}

// onclick CUARTO BLOQUE
function clickUno() {
  setValueBoton("1");
}

function clickDos() {
  setValueBoton("2");
}

function clickTres() {
  setValueBoton("3");
}

function clickSumar() {
  if (ultimoOperador == "+") return;

  addOperador("+");
  ultimoOperador = "+";
  setResultado();
  arr.push("+");
}

// QUINTO BLOQUE
function clickCero() {
  setValueBoton("0");
}

function clickDecimal() {
  if (ultimoOperador == ".") return;

  addOperador(".");
  ultimoOperador = ".";
  setResultado();
  arr.push("/");
}

function clickIgual() {
  setResultado();
}
