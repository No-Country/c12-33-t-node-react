"use client"
import CardTeam from '@/components/team/CardTeam'

interface SocialMedia {
    github: string;
    linkedin: string;
    website: string;
}

interface Image {
    src: string;
    width: number;
    height: number;
    alt: string;
}

interface Integrant {
    color: string;
    name: string;
    rol: string;
    image: Image;
    socialMedia: SocialMedia;
    href: string;
}

export const team: Integrant[] = [
    {   
        color: 'violet-800',
        name: 'Fabián Carabajal',
        rol: 'Front End Developer',
        image: {
            src: 'https://i.postimg.cc/jSf5BSF0/11-1.jpg',
            width: 150,
            height: 150,
            alt: 'Fabián'
        },
        socialMedia: {
            github: 'https://www.github.com/fabio1501',
            linkedin: 'https://www.linkedin.com/fabian1501',
            website: 'https://fabidev.vercel.app',
        },
        href: 'fabian',
    },
    {   
        color: 'violet-800',
        name: 'Fabián Carabajal',
        rol: 'Front End Developer',
        image: {
            src: 'https://i.postimg.cc/jSf5BSF0/11-1.jpg',
            width: 150,
            height: 150,
            alt: 'Fabián'
        },
        socialMedia: {
            github: 'https://www.github.com/fabio1501',
            linkedin: 'https://www.linkedin.com/fabian1501',
            website: 'https://fabidev.vercel.app',
        },
        href: 'exequiel',
    }
]

const pageAbout: React.FC = () => {

    return(
        <div className="bg-white text-black px-24 flex flex-col items-center gap-y-12 py-20">
            <div className='flex flex-col items-center gap-y-3'>
                <h2 className="text-4xl font-semibold">Nuestro equipo</h2>
                <div className='w-3/4 h-2 bg-slate-200'></div>
            </div>
            <div className="">
                {
                    team.map((integrant) => {
                        return(
                            <CardTeam color={integrant.color} name={integrant.name} rol={integrant.rol} image={integrant.image} socialMedia={integrant.socialMedia} href={integrant.href}></CardTeam>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default pageAbout;
