import Image from 'next/image'

export default function Page(){
    return(
        <section className='m-auto px-32 py-12 flex items-center gap-x-12'>
            <div className='w-1/2 flex flex-col items-start gap-y-4'>
                <span className='font-semibold'>Paso 1</span>
                <h3 className='font-semibold text-5xl'>Contanos acerca de tu salón de fiestas</h3>
                <p className='text-xl'>En este paso, te vamos a preguntar qué tipo de salón tenés y si los huéspedes van a reservar el salón entero o solo una parte. Hacenos saber la ubicación y cuántos huéspedes pueden disfrutar del salón.</p>
            </div>
            <Image width={250} height={250} className='w-1/2' src='https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png' alt='' />
        </section>
    )
}