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
    aire_acondicionado:Number
    parrilla:Number
    pantalla:Number
    personal_seguridad:Number
    baño:Number
    baño_accesibilidad:Boolean
    accesibilidad:Boolean
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
    reviews: String
    eventos: String 
  }
export async function POST(request: Request){
    const { precio, capacidad_max, superficie, aire_acondicionado, parrilla, pantalla, personal_seguridad, baño,
        baño_accesibilidad, accesibilidad, estacionamiento, catering, mesas_sillas, luces,
        sonido, fotografia, decoracion, pileta, wifi, cocina, escenario, ascendente } = await request.json()
   

    const { data } = await axios(`${url}/salones`)
    let salones = data.data
   console.log(precio);

    precio ? salones = salones.filter( (salon: Salon ) => salon.precio <= precio ) : null

    capacidad_max ? salones = salones.filter( (salon: Salon ) => salon.capacidad_max >= capacidad_max ) : null
    
    superficie ? salones = salones.filter( (salon: Salon ) => salon.superficie >= superficie ) : null

    aire_acondicionado ? salones = salones.filter( (salon: Salon ) => salon.aire_acondicionado >= aire_acondicionado ) : null

    parrilla ? salones = salones.filter( (salon: Salon ) => salon.parrilla >= parrilla ) : null

    pantalla ? salones = salones.filter( (salon: Salon ) => salon.pantalla >= pantalla ) : null

    personal_seguridad ? salones = salones.filter( (salon: Salon ) => salon.personal_seguridad >= personal_seguridad ) : null

    baño ? salones = salones.filter( (salon: Salon ) => salon.baño >= baño ) : null

    baño_accesibilidad ? salones = salones.filter( (salon: Salon ) => salon.baño_accesibilidad = baño_accesibilidad ) : null

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

    console.log(salones);
   
   
    
    return NextResponse.json({ message: "Ruta lista", results: salones })
}