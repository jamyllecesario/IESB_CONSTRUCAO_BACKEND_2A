const express = require('express');
const Projeto = require('../models/ProjetoModel');
const { createSchema, updateSchema } = require('../validators/ProjetoValidator');
const validate = require('./_validateMiddleware');

const router = express.Router();

router.post('/', validate(createSchema), async (req, res) => {
  try {
    const item = await Projeto.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar projeto' });
  }
});

router.get('/', async (req, res) => {
  try {
    const itens = await Projeto.find();
    return res.json(itens);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar projetos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Projeto.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Projeto não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar projeto' });
  }
});

router.put('/:id', validate(updateSchema), async (req, res) => {
  try {
    const item = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ error: 'Projeto não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Projeto.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Projeto não encontrado' });
    return res.json({ message: 'Projeto removido' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover projeto' });
  }
});

module.exports = router;
