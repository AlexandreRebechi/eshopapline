const { Router } = require('express');

const { rotasCategorias } = require('./rotasCategorias');

const { rotasProdutos} = require('./rotasProdutos');

const { login } = require('../controllers/segurancaController');

const rotas = new Router();

// rota para o login
rotas.route('/login').post(login);

rotas.use(rotasCategorias);
rotas.use(rotasProdutos);

module.exports = rotas;
