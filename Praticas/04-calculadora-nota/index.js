//importa o express
const express = require('express')
//crio uma instancia do express
const app = express()

//Middlewares (intermediarios)
//intermediario de log
app.use((req, res, next) => {
    console.log("______________####________________")
    console.log("tempo: ", new Date().toLocaleString())
    console.log("metado: ", req.method)
    console.log("rota: ", req.url)
  next()
})
app.get('/nome', (req, res, next) => {
    const primeiro = req.query.primeiro
    const sobrenome = req.query.sobrenome

    res.send("ola " + primeiro + " " + sobrenome + "!!!")
})

const calculadoranotarouter = require('./routes/calculadora nota')
app.use('/calculadora', calculadoranotarouter)



//execultar a aplicaçao
app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})