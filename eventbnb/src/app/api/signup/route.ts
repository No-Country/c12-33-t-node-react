const URL_USUARIOS="http://34.125.90.13:5000/usuarios"
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const {nombre, apellido, password, email}= await request.json();
    if (!password || password.length < 6) return NextResponse.json(
        {message: 'la contraseña debe tener al menos 6 caracteres'},
        {status:400},)
    console.log(URL_USUARIOS);
    const usuarioEncontrado = await axios.get(URL_USUARIOS+`?email=${email}`);
    if(usuarioEncontrado.data.data) return NextResponse.json({message:'usuario ya existe'},{status:409});
    
    console.log(/*nombre,apellido,password,email, */usuarioEncontrado.data);
    return NextResponse.json({message:'singup'});
}