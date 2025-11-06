const express = require('express');
const router = express.Router();

const DepartamentoController = require('./controllers/DepartamentoController');
const CargoController = require('./controllers/CargoController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProjetoController = require('./controllers/ProjetoController');
const TarefaController = require('./controllers/TarefaController');

// Prefixo /api já é aplicado no index.js
router.use('/departamentos', DepartamentoController);
router.use('/cargos', CargoController);
router.use('/funcionarios', FuncionarioController);
router.use('/projetos', ProjetoController);
router.use('/tarefas', TarefaController);

module.exports = router;
