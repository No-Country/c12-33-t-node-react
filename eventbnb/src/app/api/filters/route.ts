import axios from "axios";
import { NextResponse } from "next/server";
const url = process.env.MICROSERVICIOS
// ORDENAMIENTO
// // Precios
export async function POST(request: Request){
    const { capacidad_max, espaciom2, precio, estacionamiento, catering, mesas_sillas, luces,
        sonido, fotografia, decoracion, pileta } = await request.json()
        console.log(capacidad_max)

    const response = await axios(`${url}/salones`)
    console.log(response.data);
    
    return NextResponse.json({ "message": "Ruta lista"})
}
// // De mayor m2 a menor y viceversa
// // Estrellas
// // Alfabeticamente
// // Capacidad

// FILTRADO 
// // Por evento
// // Estacionamiento
// // Catering
// // Mesas y sillas
// // Luces
// // Sonido
// // fotografia
// // decoracion
// // pileta