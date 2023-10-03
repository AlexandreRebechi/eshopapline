const {pool} = require('../config');
const Usuario = require('../entites/usuario');

const autenticaUsuarioDB = async (body) => {
    try {
        const {email, senha} = body;
        const results = await pool.query(`SELECT * FROM usuarios WHERE
        email = $1 AND senha = $2`,[email, senha]);
        if (results.rowCount == 0){
            throw "Usuario ou senha invalido"
        }
        const usuario = results.rows[0];
        return new Usuario(usuario.email, usuario.tipo, usuario.telefone, usuario.nome,
            ['ADDCATEGORIA','REMOVECATEGORIA'])
    } catch (err) {
        throw err;
    }


}

module.exports = {autenticaUsuarioDB};