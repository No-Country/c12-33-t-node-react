'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai"
import { MdOutlineNavigateNext, MdWarningAmber, MdPinDrop, MdHomeRepairService, MdArrowBackIosNew } from "react-icons/md"
import {SiCodechef} from 'react-icons/si'

interface Options {
    text: string;
    state: string;
}

const services: Options[] = [
    {
        text: 'Baños Accesibles',
        state: 'baño_accesibilidad'
    },
    {
        text: 'Accesibilidad',
        state: 'accesibilidad'
    },
    {
        text: 'Estacionamiento',
        state: 'estacionamiento'
    },
    {
        text: 'Catering',
        state: 'catering'
    },
    {
        text: 'Mesas y sillas',
        state: 'mesas_sillas'
    },
    {
       
        text: 'Luces especiales',
        state: 'luces'
    },
    {
        text: 'Sonido',
        state: 'sonido'
    },
    {
        text: 'Fotografía',
        state: 'fotografia'
    },
    {
        text: 'Decoración',
        state: 'decoracion'
    },
    {
        text: 'Pileta',
        state: 'pileta'
    },
    {
        text: 'Zona WiFi',
        state: 'wifi'
    },
    {
        text: 'Cocina',
        state: 'cocina'
    },
    {
        text: 'Escenario',
        state: 'escenario'
    },
] 

const EditSalon = ({formHidden, salonData, setSalonData, setFormHidden}) => {
    // Estados para ocultar cada sección de las opciones a editar 
    const [principalBody, setPrincipalBody] = useState(true)
    const [servicesHidden, setServicesHidden] = useState(true)
    const [especialServicesHidden, setEspecialServicesHidden] = useState(true)
    const [delicatedInformationHidden, setDelicatedInformationHidden] = useState(true)
    const [ubicationHidden, setUbicationHidden] = useState(true)
    
    // Estados para la logica de cada atributo a editar
    const [servicesActiveHidden, setServicesActiveHidden] = useState(true)
    
    
    const handleChange = (e) => {
        setSalonData({...salonData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        try {
            const {data} = await axios.put('http://104.154.93.179:5000/salones/salon_id', salonData)
            setSalonData(data)
        } catch (error) {
            
        }
    }

    // Manejo la logica de secciones
    const handleServices = () => {
        setPrincipalBody(!principalBody)
        setServicesHidden(!servicesHidden)
    }

    // manejo de la logica de servicios - atributos booleanos

    const handleActiveServices = (attr) => {
        setSalonData((prevState) => {
            return {
                ...prevState,
                [attr]: !salonData[attr]
            }
        })
    }

    const handleBackButton = () => {
        setPrincipalBody(!principalBody)
        setServicesHidden(!servicesHidden)
    }

    // manejo de la logica de servicios especiales - atributos tipo number

    // manejo de la logica de ubicación - atributos tipo string

    // manejo de la logica de información delicada - atributos tipo string
console.log(salonData)
    return (
        <div className={`${formHidden ? 'hidden' : 'block'} absolute right-0 top-0 h-full flex flex-col items-center`}>
            <div className="z-10 flex flex-col items-center justify-between h-full w-[24rem] border-l">
                {/* HEADER */}
                <div className={`${principalBody ? 'flex' : 'hidden'} w-full sticky top-0 left-0 border-b py-4 items-center gap-x-4 justify-between px-4`}>
                    <h3 className="text-xl">Edita a {salonData.nombre}</h3>
                    <button className="p-2 rounded-lg hover:bg-slate-100" onClick={() => setFormHidden(!formHidden)}>
                        <AiOutlineClose className="text-xl font-semibold"></AiOutlineClose>
                    </button>
                </div>
                {/* HEADER QUE SE REPITE EN TODAS LAS OPCIONES DE SECCIONES */}
                <div className={`${principalBody ? 'hidden' : 'flex'} px-4 w-full sticky top-0 left-0 border-b py-4 flex items-center gap-x-8`}>
                    <button className="rounded-full p-2 hover:bg-slate-100" onClick={handleBackButton}>
                        <MdArrowBackIosNew></MdArrowBackIosNew>
                    </button>
                    <h3 className="font-semibold text-2xl">{!servicesHidden ? 'Servicios' : ''}</h3>
                </div>
                {/* BODY */}
                <div className={`${principalBody ? 'flex' : 'hidden'} w-full h-full px-4 py-4 bg-white flex flex-col items-start gap-y-3`}>
                    <h3 className="text-stone-600 font-semibold">Información del salón</h3>
                    <button 
                    onClick={handleServices}
                    className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdHomeRepairService className="text-2xl"></MdHomeRepairService>
                            <span className="text-xl">Servicios</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <SiCodechef className="text-2xl"></SiCodechef>
                            <span className="text-xl">Servicios especiales</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdPinDrop className="text-2xl"></MdPinDrop>
                            <span className="text-xl">Ubicación</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                    <button className="w-full px-3 py-6 rounded-xl flex items-center justify-between hover:bg-slate-100">
                        <div className="flex items-center gap-x-3">
                            <MdWarningAmber className="text-2xl"></MdWarningAmber>
                            <span className="text-xl">Información delicada</span>
                        </div>
                        <MdOutlineNavigateNext className="text-2xl"></MdOutlineNavigateNext>
                    </button>
                </div>
                {/* SERVICES */}
                <div className={`${servicesHidden ? 'hidden' : 'flex'} flex-col w-full h-full gap-y-2 bg-white px-4 pt-6 overflow-y-auto`}>
                    <h3 className="pb-3 px-2 text-stone-500  font-semibold">Editá los servicios de tu salón</h3>
                    {
                        services.map((service) => {
                            return(
                                <div className="border-b py-3 px-2 flex items-center justify-between">
                                    <span>{service.text}</span>
                                    <div className="flex items-center gap-x-2">
                                        <button 
                                        onClick={() => handleActiveServices(service.state)}
                                        className={`${!salonData[service.state] ? 'bg-black text-white' : 'hover:text-black hover:border-black'} rounded-full p-2 border text-stone-500 `}>
                                            <AiOutlineClose></AiOutlineClose>
                                        </button>
                                        <button 
                                        onClick={() => handleActiveServices(service.state)}
                                        className={`${salonData[service.state] ? 'bg-black text-white' : 'hover:text-black hover:border-black'} rounded-full p-2 border text-stone-500 `}>
                                            <AiOutlineCheck></AiOutlineCheck>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* FOOTER */}
                <div className={`${principalBody ? 'flex' : 'hidden'} w-full sticky top-0 left-0 border-t px-4 py-4 items-center`}>
                    <button className="bg-black/90 hover:bg-black py-2 text-center w-full rounded-md text-white font-semibold">
                        Listo
                    </button>
                </div>
                {/* FOOTER QUE SE REPITE EN TODAS LAS OPCIONES DE SECCIONES */}
                <div className={`${principalBody ? 'hidden' : 'flex'} w-full sticky top-0 left-0 border-t py-4 px-4 flex items-center justify-between`}>
                    <button className="underline font-semibold">
                        Atrás
                    </button>
                    <button className="bg-black/90 hover:bg-black px-4 py-2 rounded-md text-white font-semibold">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EditSalon;
