const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const reserva = req.body;
    const newReserva = await Reserva.create(reserva);
    response(res,201,newReserva);
}