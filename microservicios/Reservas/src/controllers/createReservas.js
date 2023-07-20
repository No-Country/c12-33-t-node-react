const Reserva = require('../data');
const { response } = require('../utils');
const { pago } = require('./mercadoPago')

module.exports = async (req, res) => {
    const reserva = req.body;
    pago(reserva)
    const newReserva = await Reserva.create(reserva);
    response(res,201,newReserva);
}