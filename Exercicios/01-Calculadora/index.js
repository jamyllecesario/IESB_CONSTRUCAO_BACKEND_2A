// index.js
const calc = require('./calculadora');

console.log('12 + 8 =', calc.somar(12, 8));
console.log('20 - 5 =', calc.subtrair(20, 5));
console.log('7 * 9 =', calc.multiplicar(7, 9));
console.log('50 / 10 =', calc.dividir(50, 10));
console.log('9 ao quadrado =', calc.aoQuadrado(9));
console.log('raiz quadrada de 144 =', calc.raizQuadrada(144));