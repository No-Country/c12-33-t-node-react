'use client'

import { useRouter } from 'next/router'
import NavTeam from '@/components/team/NavTeam'
import team from '../page'

const Page = () => {
    // const router = useRouter()
    // console.log(router);
    
    // const { param } = router.query
    // const detailIntegrant = team.find()    

    return(
        <div>
            {/* <div>{param}</div> */}
            <NavTeam></NavTeam>
        </div>
    )
}

export default Page; 
