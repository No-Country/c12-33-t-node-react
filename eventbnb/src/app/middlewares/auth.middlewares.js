require('../data');
const {ClientError} =require('../utils/errors')

module.exports= async (req,res,next)=>{
    const {email, password} = req.body; // es 'password' lo q viene ?
    let msgError = '';
    const user = {};
    const validated = new EmailValidator(email); // THROW NEW ERROR     
    user = await Usuario.getByEmail(email);
    if(user){
        const verify = comparePassword(user.password, password);
        if(verify){
            'LOGUEADO' // next();
        }else{
            msgError = 'credenciales invalidas'; 
        }
    }else{
        'REGISTRAR USER' // next();
    }
    console.log("MENSAJE: ", msgError);
    if(msgError) throw new ClientError(msgError, 401);
    // next();
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