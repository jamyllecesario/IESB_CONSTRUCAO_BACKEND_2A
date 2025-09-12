//importar o express
const express = require('express')
//criar um router(roteador)
const router = express.Router()

//mapeamento das rotas e implemento a logica
//calcular nota A1
router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)
  
    // validar se os parametro existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "notas inavalidas!!!" })
    }
    //validar se as notas estao no intervalo correto
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6){
        return res.status(400).json({ erro: "notas fora do intervalo" })
    }
    
    const notaA1 = exercicio + trabalho + prova

    res.json({ notaA1 })
})

//calcular notaA2

/router.get('/notaA2', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    // validar se os parametros existem
    if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "notas inválidas!!!" })
    }

    // validar se as notas estão no intervalo correto
    if (exercicio < 0 || exercicio > 2 || 
        trabalho < 0 || trabalho > 2 || 
        prova < 0 || prova > 6) {
        return res.status(400).json({ erro: "notas fora do intervalo" })
    }

    const notaA2 = exercicio + trabalho + prova

    res.json({ notaA2 })
})

//calcular a media final (a1 40% - a2 60%)

router.get('/mediaFinal', (req, res, next) => {
    const notaA1 = parseFloat(req.query.a1)
    const notaA2 = parseFloat(req.query.a2)

    // validar se os parâmetros existem
    if (isNaN(notaA1) || isNaN(notaA2)) {
        return res.status(400).json({ erro: "notas inválidas!!!" })
    }

    // validar se as notas estão no intervalo 0 a 10
    if (notaA1 < 0 || notaA1 > 10 || notaA2 < 0 || notaA2 > 10) {
        return res.status(400).json({ erro: "notas fora do intervalo" })
    }

    const mediaFinal = (notaA1 * 0.4) + (notaA2 * 0.6)

    res.json({ mediaFinal })
})










module.exports = router
