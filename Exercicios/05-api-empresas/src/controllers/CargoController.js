const express = require('express');
const Cargo = require('../models/CargoModel');
const { createSchema, updateSchema } = require('../validators/CargoValidator');
const validate = require('./_validateMiddleware');

const router = express.Router();

router.post('/', validate(createSchema), async (req, res) => {
  try {
    const item = await Cargo.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar cargo' });
  }
});

router.get('/', async (req, res) => {
  try {
    const itens = await Cargo.find();
    return res.json(itens);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar cargos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Cargo.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Cargo não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar cargo' });
  }
});

router.put('/:id', validate(updateSchema), async (req, res) => {
  try {
    const item = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ error: 'Cargo não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar cargo' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Cargo.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Cargo não encontrado' });
    return res.json({ message: 'Cargo removido' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover cargo' });
  }
});

module.exports = router;
