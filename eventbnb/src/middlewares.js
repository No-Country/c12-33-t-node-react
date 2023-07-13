require('./data');
const { ClientError } = require('./utils/errors')

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    let msgError = '';
    let user = {};
    user = await Usuario.getByEmail(email);
    if (user) {
        let verify = false; // cambiar
        if (password === user.password) verify = true; // cambiar
        if (verify) { // 'LOGUEADO'            
            next();
        } else {
            msgError = 'credenciales invalidas';
        }
    } else { // 'REGISTRAR USER'
        next();
    }
    if (msgError) throw new ClientError(msgError, 401);
}