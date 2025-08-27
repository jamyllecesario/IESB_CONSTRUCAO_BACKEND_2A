// calculadora.js

function somar ( a, b) {
    return a + b;
}

function subtrair ( a, b){
    return a - b;
}

function multiplicar ( a, b){
    return a * b;
}

function dividir (a, b){
    if(b === 0){
        return "Erro Divisao Por 0";
    }
    return a / b;
}


function aoQuadrado(a) {
    return a * a;
  }
  
  function raizQuadrada(a) {
    return Math.sqrt(a);
  }
  
  // exporta as funções para serem usadas em outro arquivo
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada
  };