//importado a lib prompt-sync
let prompt = require('prompt-sync')()

//usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

console.log("olá" + nome)

// Importar o modulo calculadoraNota
let {calculadoraNotaA1,calculadoraNotaA2,calculadoraNotaFinal} = require('./calculadoraNota')

//Perguntar pro usuario a nota de exercicios , trabalho e prova

let exerciciosA1 = parseFloat(prompt("Qual a sua nota de exercicios nota A1?"))
let trabalhoA1 = parseFloat(prompt("Qual a sua nota de trabalho nota A1?"))
let provaA1 = parseFloat(prompt("Qual a sua nota de prova nota A1?"))
let notaA1 = calculadoraNotaA1(exerciciosA1, trabalhoA1, provaA1)


console.log("## CALCULO NOTA A1 ##")
console.log("Nota exercicios A1: ", exerciciosA1)
console.log("Nota trabalho A1: ", trabalhoA1)
console.log("Nota prova A1: ", provaA1)
console.log("Nota A1 calculada: ", notaA1)

//NOTA A2
let exercicioA2 = parseFloat(prompt("Qual a nota de exercicios A2:"))
let trabalhoA2 = parseFloat(prompt("Qual a sua nota de trabalho nota A2?"))
let provaA2 = parseFloat(prompt("Qual e a sua nota prova A2?"))
let notaA2 = calculadoraNotaA2(exercicioA2, trabalhoA2, provaA2)

console.log("### CALCULAR NOTA A2 ###")
console.log("Nota exercicios A2: ", exercicioA2)
console.log("Nota trabalho A2: ", trabalhoA2)
console.log("Nota prova A2: ", provaA2)
console.log("NOTA A2 CALCULADA: ", notaA2)

let notafINAL = calculadoraNotaFinal(notaA1, notaA2)

console.log("### Calculo de NOTA FINAL ###")
console.log("nota Final: ", notafINAL)

if (notafINAL >= 5){
    console.log("Parabéns " + nome + ", você foi Aprovado!!!")
  } else {
    console.log(nome + ", estude mais, infelizmente você foi Reprovado!!!")
  }