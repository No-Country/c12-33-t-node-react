import axios from "axios";
import { NextResponse } from "next/server";
const url = process.env.MICROSERVICIOS

interface Salon {
    nombre: String
    domicilio: String
    localidad: String
    ubicacion: String
    imagenes: Array<String>
    telefono: Number
    precio:Number
    capacidad_max:Number
    superficie:Number
    disponibilidad: Boolean //Adri
    calefaccion:Number //Adri
    aire_acondicionado:Number
    parrilla:Number
    pantalla:Number
    personal_seguridad:Number
    baño:Number
    accesibilidad:Boolean //Adri
    baño_accesibilidad:Boolean //Adri
    pasillo_accesibilidad:Boolean //Adri
    entrada_accesibilidad:Boolean //Adri
    estacionamiento_accesibilidad:Boolean //Adri
    estacionamiento: Boolean
    catering: Boolean
    mesas_sillas: Boolean
    luces: Boolean
    sonido: Boolean
    fotografia: Boolean
    decoracion: Boolean
    pileta: Boolean
    wifi:Boolean
    cocina:Boolean
    escenario:Boolean
    descripcion: String
    propietario:String
    puntuacion: String
    eventos: String 
    mascotas: Boolean //Adri
  }
export default async function POST(request: Request){
    const { precio, capacidad_max, superficie, disponibilidad, calefaccion, aire_acondicionado, parrilla, pantalla, personal_seguridad, baño,
        baño_accesibilidad, pasillo_accesibilidad, entrada_accesibilidad, estacionamiento_accesibilidad,  accesibilidad, estacionamiento, catering, mesas_sillas, luces,
        sonido, fotografia, decoracion, pileta, wifi, cocina, escenario, ascendente, mascotas } = await request.json()
   

    const { data } = await axios(`${url}/salones`)
    let salones = data.data
   console.log(precio);

   /* ---------- Agregado por Adriana ----------*/
   // Filtrar salones según el valor de precio recibido
   if (precio && precio.min !== undefined && precio.max !== undefined) {
    salones = salones.filter((salon: Salon) => {
      const salonPrecio = salon.precio;
      return salonPrecio >= precio.min && salonPrecio <= precio.max;
    });
  }
   // Filtrar salones según el valor de estacionamiento recibido
  if (estacionamiento) {
    salones = salones.filter((salon: Salon) => salon.estacionamiento === true);
  }
  // Filtrar salones según el valor de pileta recibido
  if (pileta) {
    salones = salones.filter((salon: Salon) => salon.pileta === true);
  }
  // Filtrar salones según el valor de disponibilidad recibido
  if (disponibilidad) {
    salones = salones.filter((salon: Salon) => salon.disponibilidad === true);
  }
// Filtrar salones según el valor de mascotas recibido
  if (mascotas) {
    salones = salones.filter((salon: Salon) => salon.mascotas === true);
  }
  /* ---------- Fin de agregado por Adriana ----------*/

   // Filtrar salones según los demás criterios
    precio ? salones = salones.filter( (salon: Salon ) => salon.precio <= precio ) : null

    capacidad_max ? salones = salones.filter( (salon: Salon ) => salon.capacidad_max >= capacidad_max ) : null
    
    superficie ? salones = salones.filter( (salon: Salon ) => salon.superficie >= superficie ) : null

    disponibilidad ? salones = salones.filter( (salon: Salon) => salon.disponibilidad >= disponibilidad ) : null

    calefaccion ? salones = salones.filter( (salon: Salon) => salon.calefaccion >= calefaccion ) : null

    aire_acondicionado ? salones = salones.filter( (salon: Salon ) => salon.aire_acondicionado >= aire_acondicionado ) : null

    parrilla ? salones = salones.filter( (salon: Salon ) => salon.parrilla >= parrilla ) : null

    pantalla ? salones = salones.filter( (salon: Salon ) => salon.pantalla >= pantalla ) : null

    personal_seguridad ? salones = salones.filter( (salon: Salon ) => salon.personal_seguridad >= personal_seguridad ) : null

    baño ? salones = salones.filter( (salon: Salon ) => salon.baño >= baño ) : null

    baño_accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.baño_accesibilidad = baño_accesibilidad ) : null

    pasillo_accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.pasillo_accesibilidad = pasillo_accesibilidad ) : null

    entrada_accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.entrada_accesibilidad = entrada_accesibilidad ) : null

    estacionamiento_accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.estacionamiento_accesibilidad = estacionamiento_accesibilidad ) : null

    accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.accesibilidad = accesibilidad ) : null

    estacionamiento ? salones = salones.filter( (salon: Salon ) => salon.estacionamiento = estacionamiento ) : null

    catering ? salones = salones.filter( (salon: Salon ) => salon.catering = catering ) : null

    mesas_sillas ? salones = salones.filter( (salon: Salon ) => salon.mesas_sillas = mesas_sillas ) : null
   
    luces ? salones = salones.filter( (salon: Salon ) => salon.luces = luces ) : null

    sonido ? salones = salones.filter( (salon: Salon ) => salon.sonido = sonido ) : null

    fotografia ? salones = salones.filter( (salon: Salon ) => salon.fotografia = fotografia ) : null
    
    decoracion ? salones = salones.filter( (salon: Salon ) => salon.decoracion = decoracion ) : null
    
    pileta ? salones = salones.filter( (salon: Salon ) => salon.pileta = pileta ) : null

    wifi ? salones = salones.filter( (salon: Salon ) => salon.wifi = wifi ) : null
    
    cocina ? salones = salones.filter( (salon: Salon ) => salon.cocina = cocina ) : null

    escenario ? salones = salones.filter( (salon: Salon ) => salon.escenario = escenario ) : null

    ascendente ? salones = salones.sort((a, b) => a.precio - b.precio) : salones = salones.sort((a, b) => b.precio - a.precio)

    mascotas ? salones = salones.filter( (salon: Salon ) => salon.mascotas = mascotas ) : null

    console.log(salones);
   
   
    
    return NextResponse.json({ message: "Ruta lista", results: salones })
}
