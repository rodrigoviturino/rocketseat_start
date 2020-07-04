const mongoose = require('mongoose');

// Selecionando a Collection Product
const ProductController = mongoose.model('Product');

module.exports = {

    async index(req, resp){
        const products = await ProductController.find();

        return resp.json(products);
    },

    async store(req, resp) {
        // Criação do Item no banco
        const products = await ProductController.create( req.body );

        // Retorna o produto que foi criado no banco de dados "À CIMA" resposta em formato de JSON a Variavel do parametro
        return resp.json(products);
    }

};



