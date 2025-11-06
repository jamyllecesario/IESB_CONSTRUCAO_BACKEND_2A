const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const uri = `mongodb+srv://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASS)}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = async function connectDB() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Erro ao conectar no MongoDB', err);
    process.exit(1);
  }
};
