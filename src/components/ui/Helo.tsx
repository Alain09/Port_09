"use client"
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

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
    <div className=' h-fit flex flex-col '>
      <section
        className=' px-4 md:px-8 lg:px-[60px] text-center  text-2xl md:text-3xl  text-white   flex flex-col gap-4  dark:bg-mobile_noir dark:md:bg-tablette_noir dark:lg:bg-laptop_noir bg-mobile_orange lg:bg-laptop_orange md:bg-tablette_orange  bg-cover bg-center bg-no-repeat  h-[160vh]   pb-10 '
      >
        <motion.h4
          variants={variable}
          initial="hid"
          animate="vis"
          
          transition={{ duration: 0.5, delay: 0.1 }}
          className=' text-center pt-[80px] md:pt-[90px] lg:pt-[100px]    font-light '>
          TRANSFORMEZ VOS IDEES EN
        </motion.h4>
        <motion.h4
          variants={variable}
          initial="hid"
          animate="vis"
          transition={{ duration: 0.5, delay: 0.3 }}
          className='font-extrabold text-3xl lg:text-4xl text-primar '>
          SOLUTIONS NUMERIQUES CAPTIVANTES
        </motion.h4>
        <motion.div
          variants={variable}
          initial="hid"
          animate="vis"
          transition={{ duration: 0.5, delay: 0.5 }}
          className=' text-center font-light '>
          <span> chez : </span>
        </motion.div>
        <div className=' mt-1 md:mt-2 text-center text-6xl md:text-7xl lg:text-8xl'>

          <Typewriter
            options={{ autoStart:true, loop: false, cursor: ' ', }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500).typeString('<span>Mr</span>')
                .typeString(mrHtml)
                .start();
            }} />
        </div>
        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}          className=' text-clip text-center font-extralight  text text-[12px] md:text-[13px] lg:text-[14px] mt-2 '>
          Donnez vie à vos projets grâce à notre expertise en
          <span className=' mx-2 px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30'>IA</span>
          <span className=' mx-2  px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30'>Site-web sur mesur</span>
          <span className=' mx-2  px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30' >Analyse de données</span>
          <span className=' mx-2  px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30'>Base de données</span>
          <span className='mx-2  px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30'>Chatbot</span>
          <span className=' mx-2  px-1 py-0.5 ring-1 ring-primar rounded-md bg-primar/30'>Design-graphic</span>.  <br />
          Nous vous accompagnons dans la realisation de vos projets numerique en apportant une touche unique allaint <br />
          <span className=' text-[16px] md:text-[17px] lg:text-[18px] text-primar font-bold'>CREATIVITE - </span>
          <span className=' text-[16px] md:text-[17px] lg:text-[18px] text-primar font-bold'>STRATEGIE - </span>
          <span className=' text-[16px] md:text-[17px] lg:text-[18px] text-primar font-bold'>INNOVATION</span>
        </motion.p>

      </section>
      <div className=' mt-10 w-full h-screen bg-blue-300'>

      </div>

    </div>)

}

export default Helo