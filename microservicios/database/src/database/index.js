const  mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports ={
    Usuario: conn.model("Usuario", require("./schemas/usuarioSchema")),
    Salon  : conn.model("Salon"  , require("./schemas/salonSchema")),
    Evento : conn.model("Evento" , require("./schemas/eventoSchema")),
    Review : conn.model("Review" , require("./schemas/reviewSchema")),
<<<<<<< HEAD
=======

>>>>>>> 2b4b0d7535f39a919a69a8dbf5a0580054cebd0d
}