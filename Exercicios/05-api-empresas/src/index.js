const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', routes);

// erro simples para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
