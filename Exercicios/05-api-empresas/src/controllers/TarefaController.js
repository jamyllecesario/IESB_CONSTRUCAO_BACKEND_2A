const express = require('express');
const Tarefa = require('../models/TarefaModel');
const Funcionario = require('../models/FuncionarioModel');
const Projeto = require('../models/ProjetoModel');
const { createSchema, updateSchema } = require('../validators/TarefaValidator');
const validate = require('./_validateMiddleware');

const router = express.Router();

router.post('/', validate(createSchema), async (req, res) => {
  try {
    const { responsavel, projeto } = req.body;
    const func = await Funcionario.findById(responsavel);
    if (!func) return res.status(400).json({ error: 'Responsável não existe' });
    const proj = await Projeto.findById(projeto);
    if (!proj) return res.status(400).json({ error: 'Projeto não existe' });

    const item = await Tarefa.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

router.get('/', async (req, res) => {
  try {
    const itens = await Tarefa.find().populate(['responsavel', 'projeto']);
    return res.json(itens);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Tarefa.findById(req.params.id).populate(['responsavel', 'projeto']);
    if (!item) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
});

router.put('/:id', validate(updateSchema), async (req, res) => {
  try {
    if (req.body.responsavel) {
      const exists = await Funcionario.findById(req.body.responsavel);
      if (!exists) return res.status(400).json({ error: 'Responsável não existe' });
    }
    if (req.body.projeto) {
      const exists = await Projeto.findById(req.body.projeto);
      if (!exists) return res.status(400).json({ error: 'Projeto não existe' });
    }

    const item = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate(['responsavel', 'projeto']);
    if (!item) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Tarefa.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.json({ message: 'Tarefa removida' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover tarefa' });
  }
});

module.exports = router;
