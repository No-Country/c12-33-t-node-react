const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = await Usuario.get(id);
    let statusCode;
    console.log("GET usuarios/:id email: ",user.email);
    user?statusCode=200:statusCode=404;
    response(res, statusCode, user);
}