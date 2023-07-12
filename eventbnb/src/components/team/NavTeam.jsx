'use client'
import Link from "next/link";
import Image from "next/image";

const NavTeam = () => {
    return(
        <div className="sticky bottom-0 left-0  bg-pink-600 px-6 py-2 flex items-center justify-center ">
            <Link href='' className="flex items-center justify-center relative w-20 h-20 rounded-full group">
                <div className="relative">
                    <Image src={'https://i.postimg.cc/jSf5BSF0/11-1.jpg'} width={150} height={150} alt="" className="w-full rounded-full object-fit"></Image>
                    <div className="absolute rounded-full inset-0 bg-pink-500/50 group-hover:bg-transparent"></div>
                </div>
                <span className="hidden absolute -top-3 -right-4 group-hover:block text-white font-semibold">001</span>
                <span className="h-[1px] w-28 bg-white/60 absolute group-hover:hidden -rotate-45"></span>
                <span className="absolute group-hover:hidden text-white font-semibold text-xl">001</span>
            </Link>
        </div>
    )
}

export default NavTeam;
