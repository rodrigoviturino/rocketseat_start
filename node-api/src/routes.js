const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Setando Rota
routes.get('/products', ProductController.index );
routes.post('/products', ProductController.store );

// Exportando o arquivo
module.exports = routes;
