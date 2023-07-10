require('../data');
const { ClientError } = require('../utils/errors')
import { EmailValidator } from '../validators/EmailValidator.js';

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    let msgError = '';
    const user = {};
    const validator = new EmailValidator(email);
    msgError = validator.validate();
    user = await Usuario.getByEmail(email);
    if (user) {
        // const verify = comparePassword(user.password, password);
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
    console.log("MENSAJE: ", msgError);
    if (msgError) throw new ClientError(msgError, 401);
}


// if(esEmail(email))
// if (!email) message='Email en blanco. ';
// if (email.trim() ==="") message='Email sin datos. ';
// if (!esEmail(email)) message=message+ 'Correo no valido.';

// function esEmail(email){
// return email.match
//     (
//     /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
//     )
// }