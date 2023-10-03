const { Router } = require('express');

const { getCategorias } = require('../controllers/categoriaController');
const {verificaJWT} = require('../controllers/segurancaController');
const rotasCategorias = new Router();

rotasCategorias.route('/categoria')
   .get(verificaJWT, getCategorias)

module.exports = {rotasCategorias}