const express = require('express');
const Departamento = require('../models/DepartamentoModel');
const { createSchema, updateSchema } = require('../validators/DepartamentoValidator');
const validate = require('./_validateMiddleware');

const router = express.Router();

router.post('/', validate(createSchema), async (req, res) => {
  try {
    const dept = await Departamento.create(req.body);
    return res.status(201).json(dept);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar departamento' });
  }
});

router.get('/', async (req, res) => {
  try {
    const itens = await Departamento.find();
    return res.json(itens);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar departamentos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Departamento.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar departamento' });
  }
});

router.put('/:id', validate(updateSchema), async (req, res) => {
  try {
    const item = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar departamento' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Departamento.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Departamento não encontrado' });
    return res.json({ message: 'Departamento removido' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover departamento' });
  }
});

module.exports = router;
