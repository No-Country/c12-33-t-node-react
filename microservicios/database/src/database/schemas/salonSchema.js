const {Schema}=require("mongoose");
const salonSchema = new Schema(
{
    nombre: String,
    domicilio: String,
    localidad: String,
    ubicacion: String,
    release_date: Date,
    capacidad_max:number,
    espaciom2:number,
    precio:number,
    estacionamiento: Boolean,
    catering: Boolean,
    mesas_sillas: Boolean,
    luces: Boolean,
    sonido: Boolean,
    fotografia: Boolean,
    decoracion: Boolean,
    pileta: Boolean,
    descripcion: String,

    propietario: {type: String, ref: "User"},
    reviews: [{type: String, ref: "review"}],
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