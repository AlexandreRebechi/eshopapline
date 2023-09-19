const { getCategoriasDB } = require('../usecases/categoriaUseCases')

const getCategorias = async (request, response) => {
    await getCategoriasDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar as categorias: ' + err
        }));
}

module.exports = { getCategorias }
