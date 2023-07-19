'use client'
import { getCookie } from "@/utils/cookies";
import axios from "axios";
import { createContext, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

interface User {
    nombre:  string;
    domicilio:  string;
    localidad:  string;
    ubicacion:  string;
    imagenes: string[];
    telefono:  string;
    precio: number; 
    capacidad_max: number;
    superficie: number; 
    aire_acondicionado: number;
    parrilla: number;
    pantalla: number;
    personal_seguridad: number;
    baño: number;
    baño_accesibilidad: boolean;
    accesibilidad: boolean;
    estacionamiento: boolean;
    catering: boolean; 
    mesas_sillas:boolean;
    luces:boolean;
    sonido:boolean;
    fotografia: boolean;
    decoracion: boolean;
    pileta:boolean;
    wifi:boolean;
    cocina:boolean;
    escenario:boolean;
    descripcion: string;
    propietario: string;
}

const UsersContext = createContext({});

export const UsersProvider = ({children}) => {
    const { data: session } = useSession();
    const [user, setUser] = useState<User>({
        nombre: "",
        domicilio: "",
        localidad: "",
        ubicacion: "",
        imagenes: [],
        telefono: "",
        precio: 0, 
        capacidad_max: 0,
        superficie: 0, 
        aire_acondicionado: 0,
        parrilla: 0,
        pantalla: 0,
        personal_seguridad: 0,
        baño: 0,
        baño_accesibilidad: false,
        accesibilidad: false,
        estacionamiento: false,
        catering: false, 
        mesas_sillas:false,
        luces:false,
        sonido:false,
        fotografia: false,
        decoracion: false,
        pileta:false,
        wifi:false,
        cocina:false,
        escenario:false,
        descripcion:"",
        propietario:"id_user"
    })
    const router = useRouter()

    const validateSession = () => {
        const jwt = getCookie("userToken")
        
        if(!session && !jwt) return false
        return true
    }

    const getUserData = async () => {
        
        const jwt = getCookie("userToken")
        // console.log(jwt)
        const { data } = await axios("http://104.154.93.179:5000/usuarios/protected",  {
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        }) 

        if(data.error) throw new Error("")
        return data.data
    }
    
    return(
        <UsersContext.Provider
        value={{
            user,
            setUser,
            getUserData,
            validateSession
        }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext;
