const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
    // Vamos definir uma resposta em formato de JSON, vamos usar o USE
    app.use(express.json() );

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, useNewUrlParser: true 
});

// Chamando os arquivo Model
requireDir('./src/models');

// Criando Collection
// const Product = mongoose.model('Product');

// Primeira Rota
    // USE é um coringa, ele pega qualquer requisição HTTP, redirecionando a requisição para tal arquivo assumir a resposta
app.use('/api', require('./src/routes'));

// Setar Porta Localhost
app.listen(3001);