"use client"
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

function Score({ texte, time,taille, icon}:{
    texte:string,
    time:number,
   taille:number,
    icon:React.JSX.Element,
}) {

    const refe = useRef(null)
    const isView = useInView(refe, { amount: 0.1, once: true })
    const [load, setLoad] = useState(0)

      {/* calcul detaille */}
        useEffect(() => {
            const controle = setInterval(() => {
                if(isView){
                    setLoad(p => {
                        if (p >=taille) {
                            clearInterval(controle)
                            return taille;
                        }
                        return p + 1;
                    })
                } 
              
    
            }, time)
            return () => clearInterval(controle);
    
        },[setLoad,isView,taille,time])


    return (
        <div ref={refe} className=' flex flex-col items-center justify-center text-third font-mono text-2xl md:text-3xl lg:text-4xl py-5 '>
            <div className='h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] rounded-full bg-third flex justify-center items-center text-primar '>{icon}</div>
            <div className='  md:my-2' >{load}<span className=' font-bold text-xl md:text-2xl'>+</span></div>
            <div className=' font-bold '>{texte}</div>
            
        </div>
    )
}

export default Score