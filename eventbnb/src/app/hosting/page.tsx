import Link from "next/link"
import { Suspense } from "react"
import Loading from "./loading"
import axios from "axios"

async function getData(){
    // Obtener el JWT desde cookies
    // const cookie = getCookie('usuario')
    // const response = await axios.post('URL', {jwt: cookie})
    // return response.data
}


const Hosting = async ({reservations}) => {

    const data = await getData()

    return(
        <section className="text-black bg-white w-full px-24">
            <div className="flex items-center justify-between">
                <h3>¡Te damos la bienvenida, {'${nombre}'}!</h3>
                <Link href='/become-a-host/1/overview' className="border border-black rounded-lg px-2 py-1">Completá tu anuncio</Link>
            </div>
            <div className="flex items-center justify-between ">
                <h3>Tus reservas</h3>
                <Link className="underline font-semibold" href='/hosting/reservations'>Todas las reservas {'(${cantidad de reservas})'}</Link>
            </div>
            <div className="flex items-center gap-x-4">
                <button className="border rounded-2xl px-2 py-1 hover:border-black">Hacen el check-out pronto {'(${cantidad de reservas})'}</button>
                <button className="border rounded-2xl px-2 py-1 hover:border-black">Estadías en curso {'(${cantidad de reservas})'}</button>
                <button className="border rounded-2xl px-2 py-1 hover:border-black">Llegan pronto {'(${cantidad de reservas})'}</button>
                <button className="border rounded-2xl px-2 py-1 hover:border-black">Próximas {'(${cantidad de reservas})'}</button>
                <button className="border rounded-2xl px-2 py-1 hover:border-black">Evaluación pendiente {'(${cantidad de reservas})'}</button>
            </div>
            <Suspense fallback= {<Loading />}>
                {
                    reservations ?
                    'RESERVAS' :
                    <div className="flex flex-col gap-y-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className="block h-12 w-12 bg-black"><path d="M24 1a5 5 0 0 1 5 4.78v5.31h-2V6a3 3 0 0 0-2.82-3H8a3 3 0 0 0-3 2.82V26a3 3 0 0 0 2.82 3h5v2H8a5 5 0 0 1-5-4.78V6a5 5 0 0 1 4.78-5H8zm-2 12a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.02 3.17 1.36 1.46-6.01 5.64-3.35-3.14 1.36-1.46 1.99 1.86z"></path></svg>
                        <span>
                            {'${mensajePersonalizadoParaCadaFiltro}'}
                        </span>
                    </div> 
                }
            </Suspense>
        </section>
    )
}

export default Hosting; 
