const {Schema}=require("mongoose");
const salonSchema = new Schema(
{
    nombre: String,
    domicilio: String,
    localidad: String,
    ubicacion: String,
    imagenes: {Type: [String]},
    telefono: Number,
    precio:Number,
    capacidad_max:Number,
    superficie:Number,
    aire_acondicionado:Number,
    parrilla:Number,
    pantalla:Number,
    personal_seguridad:Number,
    baño:Number,
    baño_accesibilidad:Boolean,
    accesibilidad:Boolean,
    estacionamiento: Boolean,
    catering: Boolean,
    mesas_sillas: Boolean,
    luces: Boolean,
    sonido: Boolean,
    fotografia: Boolean,
    decoracion: Boolean,
    pileta: Boolean,
    wifi:Boolean,
    cocina:Boolean,
    escenario:Boolean,
    descripcion: String,

    propietario: {type: String, ref: "User"},
    reviews: [{type: String, ref: "Review"}],
    eventos: [{type: String, ref: "Evento"}]

  });
  salonSchema.statics.list = async function (){
    return await this.find()
      .populate("propietario",["_id","nombre","apellido"])
      .populate("eventos",["_id","nombre_evento"])
  };
  salonSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("propietario",["_id","nombre","apellido"])
    .populate("eventos",["_id","nombre_evento"])
    .populate("reviews",["_id","comentario", "puntaje", "fecha", "cliente", "evento"])
  };
  salonSchema.statics.insert = async function (salon){
    return await this.create(salon);
  };
  salonSchema.statics.change = async function (id, salon){
    return await this.findByIdAndUpdate(id, salon,{new:true});
  };
  salonSchema.statics.remove = async function (id) {
    return await this.findByIdAndRemove(id);
  };  
module.exports = salonSchema;