import axios from "axios";
import { NextResponse } from "next/server";
const url = process.env.NEXTAUTH_URL
// ORDENAMIENTO
// // Precios
export async function GET(){
    const response = await axios(`${url}/salones`)
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