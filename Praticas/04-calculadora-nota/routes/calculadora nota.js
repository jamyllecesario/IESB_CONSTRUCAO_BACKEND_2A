//importar o express
const express = require('express')
//criar um router(roteador)
const router = express.Router()

//mapeamento das rotas e implemento a logica

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

//calcular a nota do A2

//calcular a media final (a1 40% - a2 60%)










module.exports = router
