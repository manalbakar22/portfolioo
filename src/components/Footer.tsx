"use client"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

const Footer = () => {
    const router = useParams()
    console.log()
    return (
        <div className={`${router.name ? "hidden" : "flex"} relative bottom-0 flex-col justify-center items-center lg:gap-10 gap-5 shadow-2xl p-5`}>
            <h1 className='capitalize font-semibold lg:text-4xl text-2xl flex items-center text-nowrap mx-3 font-Poppins'>Manal BAKAR<span className='text-5xl font-bold text-[#6e06f2]'>.</span></h1>
            <div className="flex lg:flex-row flex-col justify-around items-center gap-6 w-full">
                <ul className="flex gap-10">
                    <li><Link target="_blank" href={"https://www.linkedin.com/in/manal-bakar-0b7b8b274"}><BsLinkedin className="duration-500 text-[#6e06f2] hover:text-[#0077B5] lg:size-7 size-6" /></Link></li>
                    <li><Link target="_blank" href={"https://github.com/manalbakar22"}><BsGithub className="duration-500 hover:text-black text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                    <li><Link target="_blank" href={"mailto:manalbakar22@gmail.com"}><SiGmail className="duration-500 text-[#6e06f2] hover:text-red-700 lg:size-7 size-6 text-" /></Link></li>
                    <li><Link target="_blank" href={"https://wa.me/+212697192517"}><BsWhatsapp className="duration-500 hover:text-green-800 text-[#6e06f2] lg:size-7 size-6" /></Link></li>
                </ul>
                <p className="font-Poppins lg:text-base text-xs mx-5 text-center font-semibold">© {new Date().getFullYear()} All Rights Reserved.Made with me by Manal BAKAR</p>
            </div>
        </div>
    )
}

export default Footer