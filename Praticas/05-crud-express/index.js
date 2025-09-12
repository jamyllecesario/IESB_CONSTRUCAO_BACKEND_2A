//importa express
const express = require('express')
const cors = require('cors')

//cria uma instancia da aplicaçao
const app = express()

//intermediario
//habilitar o cors na requisição 
app.use(cors())
//hanilitar receber json no corpo da requisiçao 
app.use(express.json())

//roteadores (intermediario do trio router)
const contatosrouter = require('./routes/contato')
app.use(express.json())




//excultar a aplicaçao 
app.listen(3000, () =>{
    console.log(aplicação rodando em http://localhost:3000)

})