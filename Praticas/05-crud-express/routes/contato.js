// importa express 
const express = require('express')
//crio um roteador 
const router = express.Router()

//implemento as rotas e a logica 

//CRUD de contato (create, read, update, delete)

//buscar a lista de contatos
router.get('/contato', (req, res, next) => {
    const { nome } = req.body
}
)

//cadastra o contato 

//deletar o contato

//deletar todos os contatos