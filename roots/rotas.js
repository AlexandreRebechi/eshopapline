const { Router } = require('express');

const { rotasCategorias } = require('./rotasCategorias');

const {login} = require('../controllers/segurancaController')

const rotas = new Router();

rotas.route('/login').post(login);

rotas.use(rotasCategorias);

module.exports = rotas;
