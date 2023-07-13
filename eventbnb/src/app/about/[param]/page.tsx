'use client'

import NavTeam from '@/components/team/NavTeam'
import Details from '@/components/team/Details'
import {team, Integrant} from '../page'
import { useEffect, useState } from 'react'

const Page = () => {

    const [detailsIntegrant, setDetailsIntegrant] = useState({})

    useEffect(() => {
        const arr = window.location.pathname.split('/')
        const integrantPath = arr[arr.length -1]
        const detailIntegrant: Integrant | undefined = team.find((integrant) => integrant.href === integrantPath)    
        setDetailsIntegrant(detailIntegrant)
    }, [])

    return(
        <div>
            <Details name={detailsIntegrant.name} rol={detailsIntegrant.rol} description={detailsIntegrant.description} detailImage={detailsIntegrant.detailImage} socialMedia={detailsIntegrant.socialMedia}></Details>
            <div className="sticky bottom-0 left-0  bg-pink-600 px-6 py-6 flex items-center justify-center gap-x-8">
            {
                team.map((integrant, index) => {
                    return(
                        <NavTeam index={index} href={integrant.href} image={integrant.image}></NavTeam>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Page; 
