//Modulo de calculadora de notas 

//40% da nota
function calculadoraNotaA1(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
}

//60% nota 
function calculadoraNotaA2(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
}

//nota final calculada (notaA1 * 0,4) + (notaA2 * 0,6)
function calculadoraNotaFinal(notaA1, notaA2){
    return (notaA1 * 0,4) + (notaA2 * 0,6)
}

//exportar essas funções para serem ultilizados no index
module.exports = {
    calculadoraNotaA1,
    calculadoraNotaA2,
    calculadoraNotaFinal
}