const express = require('express');
const Funcionario = require('../models/FuncionarioModel');
const Cargo = require('../models/CargoModel');
const Departamento = require('../models/DepartamentoModel');
const { createSchema, updateSchema } = require('../validators/FuncionarioValidator');
const validate = require('./_validateMiddleware');

const router = express.Router();

router.post('/', validate(createSchema), async (req, res) => {
  try {
    const { cargo, departamento } = req.body;
    const cargoExists = await Cargo.findById(cargo);
    if (!cargoExists) return res.status(400).json({ error: 'Cargo não existe' });
    const deptExists = await Departamento.findById(departamento);
    if (!deptExists) return res.status(400).json({ error: 'Departamento não existe' });

    const item = await Funcionario.create(req.body);
    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar funcionário' });
  }
});

router.get('/', async (req, res) => {
  try {
    const itens = await Funcionario.find().populate(['cargo', 'departamento']);
    return res.json(itens);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar funcionários' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento']);
    if (!item) return res.status(404).json({ error: 'Funcionário não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar funcionário' });
  }
});

router.put('/:id', validate(updateSchema), async (req, res) => {
  try {
    if (req.body.cargo) {
      const exists = await Cargo.findById(req.body.cargo);
      if (!exists) return res.status(400).json({ error: 'Cargo não existe' });
    }
    if (req.body.departamento) {
      const exists = await Departamento.findById(req.body.departamento);
      if (!exists) return res.status(400).json({ error: 'Departamento não existe' });
    }

    const item = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate(['cargo', 'departamento']);
    if (!item) return res.status(404).json({ error: 'Funcionário não encontrado' });
    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar funcionário' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Funcionario.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Funcionário não encontrado' });
    return res.json({ message: 'Funcionário removido' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover funcionário' });
  }
});

module.exports = router;
