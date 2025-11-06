const yup = require('yup');
const IDValidator = require('./IDValidator');

const createSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  data_inicio: yup.date().required('Data início é obrigatória'),
  data_fim: yup
    .date()
    .required('Data fim é obrigatória')
    .test('is-after', 'data_fim deve ser posterior a data_inicio', function(value) {
      const { data_inicio } = this.parent;
      return !data_inicio || !value || new Date(value) > new Date(data_inicio);
    }),
  responsavel: yup
    .string()
    .required('Responsável é obrigatório')
    .test('is-objectid', 'Responsável inválido', (value) => IDValidator.isValidObjectId(value)),
  projeto: yup
    .string()
    .required('Projeto é obrigatório')
    .test('is-objectid', 'Projeto inválido', (value) => IDValidator.isValidObjectId(value))
});

const updateSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup
    .date()
    .test('is-after', 'data_fim deve ser posterior a data_inicio', function(value) {
      const { data_inicio } = this.parent;
      if (!value) return true;
      if (!data_inicio) return true;
      return new Date(value) > new Date(data_inicio);
    }),
  responsavel: yup.string().test('is-objectid', 'Responsável inválido', (value) => !value || IDValidator.isValidObjectId(value)),
  projeto: yup.string().test('is-objectid', 'Projeto inválido', (value) => !value || IDValidator.isValidObjectId(value))
});

module.exports = { createSchema, updateSchema };
