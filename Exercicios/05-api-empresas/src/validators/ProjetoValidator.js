const yup = require('yup');

const createSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  data_inicio: yup.date().required('Data início é obrigatória'),
  data_fim: yup.date().required('Data fim é obrigatória')
    .test('is-after', 'data_fim deve ser posterior a data_inicio', function(value) {
      const { data_inicio } = this.parent;
      return !data_inicio || !value || new Date(value) > new Date(data_inicio);
    })
});

const updateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup.date().test('is-after', 'data_fim deve ser posterior a data_inicio', function(value) {
    const { data_inicio } = this.parent;
    if (!value) return true;
    if (!data_inicio) return true;
    return new Date(value) > new Date(data_inicio);
  })
});

module.exports = { createSchema, updateSchema };
