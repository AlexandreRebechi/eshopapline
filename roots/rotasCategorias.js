const { Router } = require('express');

const { getCategorias } = require('../controllers/categoriaController');

const rotasCategorias = new Router();

rotasCategorias.route('/categoria')
   .get(getCategorias)

module.exports = {rotasCategorias}