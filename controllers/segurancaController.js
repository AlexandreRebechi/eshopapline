const { autenticaUsuarioDB } = require('../usecases/segurancaUseCases');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


const login = async(request, response) => {
    await autenticaUsuarioDB(request.body)
        .then(usuario => {
            const token = jwt.sign({usuario}, process.env.SECRET, {
                expiresIn: 300 // expira em 5 minutos

            })
            return response.json({auth: true, token: token});
        })
        .catch(err => response.status(401).json({
            auth: false,
            message: err
        }));
}
// verificação do token
function verificaJWT(request, response, next) {
    const token = request.headers['authorization'];
  if(!token) 
  return response.status(401).json({auth: false , 
  message: "Erro ao autenticar o token"});
  // verificar o token
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if(err){
        response.status(401).json({auth: false, 
            message: "Erro ao autenticar o token"})
    }
    // se token é valido salva no request para o uso posterior
    console.log('Usuarios Token decodificado: '+
    JSON.stringify(decoded.usuario));
    request.usuario = decoded.usuario;
    next()
  })
}

module.exports = {
    login, verificaJWT
}
