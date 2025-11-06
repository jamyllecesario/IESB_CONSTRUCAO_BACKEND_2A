const yup = require('yup');
const IDValidator = require('./IDValidator');

const enderecoSchema = yup.object().shape({
  cep: yup.string(),
  logradouro: yup.string(),
  numero: yup.string(),
  complemento: yup.string(),
  bairro: yup.string(),
  cidade: yup.string(),
  uf: yup.string()
});

const base = {
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  telefone: yup.string().required('Telefone é obrigatório'),
  data_contratacao: yup.date().required('Data de contratação é obrigatória'),
  data_nascimento: yup.date().required('Data de nascimento é obrigatória'),
  genero: yup.string().required('Gênero é obrigatório'),
  endereco: enderecoSchema,
  cargo: yup.string().required('Cargo é obrigatório').test('is-objectid', 'Cargo inválido', IDValidator.isValidObjectId),
  departamento: yup.string().required('Departamento é obrigatório').test('is-objectid', 'Departamento inválido', IDValidator.isValidObjectId)
};

const createSchema = yup.object().shape(base);

const updateSchema = yup.object().shape({
  nome: yup.string(),
  cpf: yup.string(),
  email: yup.string().email('Email inválido'),
  telefone: yup.string(),
  data_contratacao: yup.date(),
  data_nascimento: yup.date(),
  genero: yup.string(),
  endereco: enderecoSchema,
  cargo: yup.string().test('is-objectid', 'Cargo inválido', val => !val || IDValidator.isValidObjectId(val)),
  departamento: yup.string().test('is-objectid', 'Departamento inválido', val => !val || IDValidator.isValidObjectId(val))
});

module.exports = { createSchema, updateSchema };
