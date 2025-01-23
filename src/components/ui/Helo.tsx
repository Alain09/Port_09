"use client"
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image';



const services =[
  {
    id:1,
    mod:"IA"
  },
  {
    id:2,
    mod:"Site web "
  },
  {
    id:3,
    mod:"Data-analyste"
  },
  {
    id:4,
    mod:"Data-Base"
  },
  {
    id:5,
    mod:"Graphic-design"
  },
  {
    id:6,
    mod:"Digi-Marketing"
  },
]
function Helo() {
  const mrHtml = ReactDOMServer.renderToStaticMarkup(<span className="text-primar">.AT</span>);

  const variable = {
    hid: {
      y: 10, opacity: 0
    },
    vis: {
      y: 0, opacity: 1
    }
  }



  return (
    <div className=' flex flex-col flex-1 '>

      <div className='relative h-[768px] '>
        <Image
          src="/fond.png"
          alt='trait '
          color='red'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority={true}
          className='  bg-gradient-to-t from-second dark:from-third bg-current ' 
        > 
        
        
        </Image>
        <div className=' flex justify-center'>
          <section
            className='absolute z-10 px-5 md:px-10 lg:px-[60px] text-center  text-2xl md:text-3xl lg:text-4xl   text-white dark:text-second    flex flex-col gap-5  bg-cover bg-center bg-no-repeat  h-fit  '
          >
            <motion.h4
              variants={variable}
              initial="hid"
              animate="vis"

              transition={{ duration: 0.5, delay: 0.1 }}
              className=' text-center pt-[80px] md:pt-[90px] lg:pt-[100px]    font-mono '>
              TRANSFORMEZ VOS IDEES EN
            </motion.h4>
            <motion.h4
              variants={variable}
              initial="hid"
              animate="vis"
              transition={{ duration: 0.5, delay: 0.3 }}
              className='font-extrabold  text-4xl lg:text-5xl text-primar '>
              SOLUTIONS NUMERIQUES CAPTIVANTES
            </motion.h4>
            <motion.div
              variants={variable}
              initial="hid"
              animate="vis"
              transition={{ duration: 0.5, delay: 0.5 }}
              className=' text-center font-mono'>
              <span> chez : </span>
            </motion.div>
            <div className=' my-2 md:my-3 text-center text-6xl md:text-7xl lg:text-8xl font-mono '>

              <Typewriter
                options={{ autoStart: true, loop: false, cursor: ' ', }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500).typeString('<span>Mr</span>')
                    .typeString(mrHtml)
                    .start();
                }} />
            </div>
            <motion.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }} className=' text-center font-extralight  text-[16px] md:text-[17px] lg:text-[18px] font-mono mt-2 '>
              <p className=' mb-5'>Donnez vie à vos projets grâce à notre expertise en :</p>
              <div className='grid  grid-rows-3 grid-cols-2 md:grid-row-2  md:grid-cols-3  gap-3'>
                {
                  services.map((service)=>{
                    return (
                      <div key={service.id} className='ring-1 ring-primar rounded-md bg-primar/30'>{service.mod}</div>
                    )
                  }
                )}
              </div>
            </motion.div>

          </section>
        </div>

      </div>





      <div className='  h-screen w-full  '>
        fghn
      </div>


    </div>)

}

export default Helo