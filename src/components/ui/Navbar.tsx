'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './modal'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'

// import icon  of material ui 

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/material'


// les icones de react-icon
import { FaTools, FaBriefcase, FaNewspaper, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTiktok } from 'react-icons/fa'; // Font Awesome
import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai'; // Ant Design
import { MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md';



const Menu =
    [
        {
            id: 1,
            liste: "Accueil",
            href: "/",
            icone: <AiFillHome size={16} />

        },
        {
            id: 2,
            liste: "A propos",
            href: "/Apropos",
            icone: <AiOutlineInfoCircle size={16} />
        },
        {
            id: 3,
            liste: "Projets",
            href: "/Projets",
            icone: <FaBriefcase size={16} />
        },
        {
            id: 4,
            liste: "Services",
            href: "/Services",
            icone: <FaTools size={16} />
        },
        {
            id: 5,
            liste: "Blog",
            href: "/Blog",
            icone: <FaNewspaper size={16} />
        },


    ]


// icone reseaux sociaux 

const Reseau_sociaux = [
    {
        id: 1,
        nom: 'Facebook',
        icon: < FaFacebookF size={16} />
    },
    {
        id: 1,
        nom: 'Facebook',
        icon: < FaWhatsapp size={16} />
    },
    {
        id: 1,
        nom: 'Facebook',
        icon: < FaLinkedinIn size={16} />
    },
    {
        id: 1,
        nom: 'Facebook',
        icon: < FaTiktok size={16} />
    },

]




function Navbar() {

    const { theme, setTheme } = useTheme() as {
        theme : "dark"|"light",
        setTheme : React.Dispatch<SetStateAction<string>>
    }



    /// recupere les liens actif
    const pathname = usePathname()

    /// le routage
    const router = useRouter()

    const [open, setOpen] = useState<boolean>(false) //pour l'ouverture et fermeture de l'affichage mobile

    //reintialisqtion de l'etqt lorsque je depasse les 1024px
    useEffect(() => {
        const HandleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false) // fermeture

            }
        };

        //ajout d'ecouteur d'evenement
        window.addEventListener("resize", HandleResize)

        // destruction d'ecouteur
        return () => window.removeEventListener("resize", HandleResize)
    }, [])


    //initialisation manuelle de theme a "light"
    {/*
         useEffect(() => {
        const exemple = setTimeout(() => {
            setTheme("black")
        }, 1)
        return () => { clearTimeout(exemple) }



    }, [])
     */}
   

    return (
        <div className=' relative  w-fit h-fit'>
            <nav className={`flex justify-center items-center gap-x-10 fixed top-0 px-4 md:px-8 lg:px-[60px]  h-[50px] md:h-[60px] lg:h-[70px]  w-full border-b-[1px] border-[#ff4500] bg-second dark:bg-third     bg-opacity-80 dark:bg-opacity-95  backdrop-blur-md dark:backdrop-blur-md z-20  `}>
                <div className='lg:hidden  cursor-pointer' onClick={() => setOpen(!open)} >
                    <Icon component={MenuIcon} height={30} width={30} className='text-third dark:text-second ' /> {/* icone menu  */}
                </div>
                <div className='lg:hidden flex justify-center items-center w-full'
                >
                    { // chnangement de couleur du logo en fonction du theme

                            theme === "light" 
                            ?<div> <Image src="/lg_mod4.png" alt='logo' width={35} height={35} className=' h-[30px] w-auto  md:h-[35px]' /></div>
                            :<div><Image src="/lg_mod3.png" alt='log1o' width={35} height={35}  className=' h-[30px] w-auto  md:h-[35px]' /></div>
                    }
                </div>
                <div className='hidden lg:flex cursor-pointer'
                    onClick={() => { router.push("/") }}  > {/* pour naviguer vers la page d'accueil */}

                    { // chnangement de couleur du logo en fonction du theme
                         theme === "light" 
                         ?<div> <Image src="/lg_mod4.png" alt='logo' width={35} height={35} className=' h-[30px] w-auto  md:h-[35px]' /></div>
                         :<div><Image src="/lg_mod3.png" alt='log1o' width={35} height={35}  className=' h-[30px] w-auto  md:h-[35px]' /></div>
                     }
                </div>
                <div className='hidden lg:flex justify-center items-center  gap-10 w-full  '>
                    {Menu.map((liste, id) => {

                        const isActive = pathname === liste.href // pour verifier le lien actif actuel
                        return (
                            <Link

                                key={id} className={`font-normal text-[16px] md:text-[17px] lg:text-[18px] ${isActive ? "text-primar " : "  text-third dark:text-second "}  `}
                                href={liste.href}
                            >
                                {liste.liste}
                            </Link>
                        )
                    }

                    )}
                </div>
                <div
                    className={`  cursor-pointer `}
                    onClick={() => { setTheme(theme === 'light' ? "dark" : 'light') }} // change o theme
                >
                    {theme === "light" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}

                </div>
            </nav>
            {/* l'affichage mobile et tablet */}
            <Mobilebar open={open} setOpen={setOpen} pathname={pathname} theme={theme} />



        </div>
    )
}

export default Navbar


///Mobile navbar 
const Mobilebar = ({ open, setOpen, pathname, theme }: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    pathname: string,
    theme: string
}) => {


    return (
        <>
            <AnimatePresence mode='wait'>
                {
                    open &&
                    <Modal setOpen={setOpen}>
                        <motion.nav
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ duration: 0.2 }}
                            className={`   flex flex-col  absolute top-0 left-0 z-[100] pl-4 md:pl-8 lg:pl-[60px] bg-second dark:bg-third  border-r-[#ff4500] border-r-[1px]  h-[2000px] w-[310px] backdrop-blur-md dark:backdrop-blur-md bg-opacity-80 dark:bg-opacity-95`}>
                            <div className=' flex justify-between items-center pt-[13px] md:pt-[18px] lg:pt-[22px] '>{/* ajustement sur la nav mobile */}
                                <div >
                                    <Link href="/" onClick={() => setOpen(!open)}>
                                        {  // icone  logo at
                                            theme === "light"
                                                ? <Image src="/lg_mod4.png" alt='logo' width={35} height={35}  className=' h-[30px] w-auto md:h-[35px]' />
                                                : <Image src="/lg_mod3.png" alt='log1o' width={35} height={35}  className=' h-[30px] w-auto md:h-[35px]' />
                                        }

                                    </Link>
                                </div>
                                <div className=' mx-10 cursor-pointer' onClick={() => setOpen(!open)}>
                                    <Icon component={CloseIcon} height={30} width={30} className='text-third dark:text-second ' /> {/* icone close  */}
                                </div>
                            </div>

                            <div className='mt-5'>
                                {Menu.map((liste) => {
                                    const isActive = pathname === liste.href // pour verifier le lien actif actuel
                                    return (
                                        <div key={liste.id} className=' flex  justify-start items-center gap-5 pt-[20px]  '>
                                            <span className={`   ${isActive ? "text-primar " : `text-third dark:text-second `}`}>{liste.icone}</span>{/* les icones correspondant au lien */}

                                            <Link
                                                onClick={() => setOpen(!open)}
                                                className={`  font-normal text-[16px] md:text-[17px] lg:text-[18px] ${isActive ? "text-primar " : `text-third dark:text-second `}`}
                                                href={liste.href}
                                            >
                                                {liste.liste}
                                            </Link>

                                        </div>
                                    )
                                }

                                )}
                            </div>

                            <span className=' h-[0.50px] w-full bg-gray-300 dark:bg-gray-400 flex justify-center  items-center mt-10' />
                            <div className=' h-fit w-fit rounded-full text-third dark:text-second font-bold  mt-10 px-2 py-1.5  flex flex-row gap-5 justify-center items-center '>

                                {
                                    Reseau_sociaux.map((icon) => {
                                        return (
                                            <div key={icon.nom} className=' flex justify-center items-center h-[26px] w-[26px] rounded-full hover:bg-[#ff4500] dark:hover:bg-primar dark:hover:text-third hover:text-third     bg-third dark:bg-second text-second dark:text-third  '>{icon.icon}</div>
                                        )
                                    })
                                }
                            </div>
                        </motion.nav>
                    </Modal>

                }
            </AnimatePresence>
        </>
    )

}