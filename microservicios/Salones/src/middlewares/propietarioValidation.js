const {URL_SERVICIO_USUARIOS} = require("../config/envs");
const axios = require("axios");
const { response } = require('../utils');
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;
    const usuarioEncontrado = await axios.get(URL_SERVICIO_USUARIOS,propietario);
    if(usuarioEncontrado) return next();
    else response(res,400,'Error id usuario propietario no encontrado');
}