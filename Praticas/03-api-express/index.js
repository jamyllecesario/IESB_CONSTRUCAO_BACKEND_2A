//importa o express
const express = require('express')

// crio uma instancia (express) da minha aplicação
const app = express()
// guardar o numero da porta que vai ser alocada
const porta = 3000

//Middlewares (intermediarios)
app.use((req, res, next) => {
  console.log("time: ", new Date().toLocaleString())
  console.log("metado: ", req.method)
  console.log("rota: ", req.url)
  next()
})

//metodo e a rota
//req -> dados da requisição
//res -> manipulador da resposta
//next -> chamador do proximo middleware
app.get('/teste', (req, res, next) => {
  res.send("ATUALIZADO 123 !!!!!")
})

app.get('/pessoas', (req, res, next) => {
  const pessoas = [
    {
      id: 1,
      nome: "João",
      idade: "20"
    },
    {
      id: 2,
      nome: "Pedro",
      idade: "22"
    },
  ]
  res.json(pessoas)
})

//execulta aplicação escolhendo a porta 
app.listen(porta, () => {
    //imprimo uma mensagem pra confirmar que a aplicação está funcionando (rodando na porta escolhida)
    console.log("aplicacao rodando em http://localhost:3000")

})
