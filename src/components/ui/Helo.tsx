"use client"
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image';
import Titre from './titre';
import { FaLightbulb, FaRocket, FaMapSigns } from "react-icons/fa";


const services = [
  {
    id: 1,
    mod: "IA"
  },
  {
    id: 2,
    mod: "Site web "
  },
  {
    id: 3,
    mod: "Data-analyste"
  },
  {
    id: 4,
    mod: "Data-Base"
  },
  {
    id: 5,
    mod: "Graphic-design"
  },
  {
    id: 6,
    mod: "Digi-Marketing"
  },
]

/// les engagement 

const engagement = [
  {
    id: 1,
    icon: <FaLightbulb size={20} />,
    titre: "CREATIVITE",
    texte: "Nous transformons vos idées en expériences visuelles uniques et inspirantes, conçues pour marquer les esprits et captiver votre audience.",

  },
  {
    id: 2,
    icon: <FaMapSigns size={20} />,
    titre: "STRATEGIE",
    texte: "Parce que chaque projet mérite une réflexion ciblée, nous bâtissons des plans d’action intelligents pour maximiser vos résultats et devancer vos concurrents.",

  },
  {
    id: 3,
    icon: <FaRocket size={20} />,
    titre: "INNOVATION",
    texte: "À la croisée de la technologie moderne et de la vision, nous créons des solutions innovantes qui propulsent votre entreprise vers l’avenir.",

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
      {/* la partie helo */}
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
                  services.map((service) => {
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




      {/* la partie engagement */}
      <div className='  h-fit w-full  text-[16px] md:text-[17px] lg:text-[18px] font-mono text-third dark:text-second border-t-2 border-t-primar/20 border-b-2 border-b-primar/20  py-20'>

        <Titre text="Engagés Pour ? " />
        <div className=' flex flex-col  md:flex-row justify-center px-5 md:px-10 lg:px-[60px] mt-10  md:justify-between items-center gap-10 md:gap-5 '>
          {
            engagement.map((eng) => {
              return (
                <div key={eng.id} className=' shadow-md ring-1 dark:ring-second/50 ring-third/50 bg-second dark:bg-third/5 rounded-md h-fit md:h-[350px] lg:h-[250px] w-fit flex flex-col   justify-start gap-y-3 px-5 py-5'>
                  <div className=' h-[40px] w-[40px] rounded-full bg-primar flex justify-center items-center text-third' >{eng.icon}</div>
                  <div className='font-bold'>{eng.titre}</div>
                  <div className=' text-start font-light text-[14px] md:text-[15px] lg:text-[16px] text-third/80 dark:text-second/80'>{eng.texte}</div>
                </div>
              )
            })
          }

        </div>

      </div>

      <div className=' h-[100px] w-full bg-primar'>
      </div>   
    </div>)

}

export default Helo