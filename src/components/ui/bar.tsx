"use client"
import React from 'react'
import { useEffect, useState,useRef } from 'react'
import { motion,useInView } from 'framer-motion'

function Bar({ texte, time, percent}: { texte: string, time: number, percent: number}) {
    
    const refe=useRef(null)
    const isView=useInView(refe,{amount:0.1,  once:true})
    const [load, setLoad] = useState(0)
    const duree = percent * time * 0.001 //la duree suffisante pour progressbar
    {/* calcul de percent */}
    useEffect(() => {
        const controle = setInterval(() => {
            if(isView){
                setLoad(p => {
                    if (p >= percent) {
                        clearInterval(controle)
                        return percent;
                    }
                    return p + 1;
                })
            } 
          

        }, time)
        return () => clearInterval(controle);

    },[setLoad,isView,percent,time])

    return (
        <div   className='flex flex-col h-fit w-full gap-1 '>
            <div className="flex justify-between  w-full text-third dark:text-second text-[15px] md:text-[16px] lg:text-[17px] font-mono" >
                <div className='font-bold'>
                    {texte}
                </div>
                <div className=' font-medium'>
                    {load}%
                </div>
            </div>
            <div className='flex justify-center items-center  h-[40px] w-full px-5 py-3 bg-third/5 dark:bg-[#d3d3d3]/40 rounded-md  '>
                <div className='relative flex justify-center items-center w-full  '>
                    <div className=' absolute left-0 h-[15px] w-full z-[5] rounded-full bg-third/60 dark:bg-second/10'>

                    </div>
                    <motion.div
                        ref={refe}
                        initial={{ width: `0%` }}
                        
                        whileInView={{
                            width: `${percent}%`,
                            transition:{duration: duree } 
                        }}
                        viewport={{
                            once:true,
                            amount:0.1,
                            
                        }}
                        
                        className=' absolute left-0 h-[15px]  z-10 bg-primar rounded-full' >

                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Bar