const Usuario = require('../data');
const SECRETO = 'ix8dG8xXk27WTZ-/E?-ZxGgpMyoBRwftdjV6413SsH2zwvuR=1BlEUKPG?IOFtWS33gEjXw9G?Kfs8E99UHFlQqpy!aCNrR4fkx74!qiSmCB97gE5P4k8vZU?9-Qvyffx2sn4qPR0T2=Klz3hOtV0uU68jxJo2VB3avaxENlv0B3yLQv543W?9PF3V035l1hvy5TVrTkWNtFmG3!oJdt7kmr3dMdEK3UBQ9VCABX!4A!DcqZGs5YKu0d6LA=2sJY';
const HASH = 13;
const { response } = require('../utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendMails = require('../utils/mails/SendMails');

module.exports = async (req, res) => {
    console.log("creando usuario", req.body);
    const { email } = req.body;
    let user = {};
    let hashPassword = "";
    const usuarioEncontrado = await Usuario.getByEmail(email);
    if (usuarioEncontrado) {
        user = usuarioEncontrado;
        console.log("USUARIO ENCONTRADO: ", user);
    }
    else {
        user = await Usuario.create(req.body);
        sendMails.send(user);
        console.log("USUARIO CREADO: ", user);
    }
    // const token = jwt.sign({
    //         exp: Math.floor(Date.now()/1000)+ (60 * 60 *24),
    //         user
    //     },'essecreto');
    // const serialized = serialize('mytokenUsuario',token,{
    //     httpOnly:true,
    // });
    // res.setHeader('Set-Cookie',serialized);
    response(res, 201, user);
}