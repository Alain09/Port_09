"use client"
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { motion, useInView } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image';
import Link from 'next/link';
import Titre from './titre';
import Bar from './bar';
import Score from './Score';
import FreeScrollCarousel from './Scrol_horizontal';
import Content_image from './Content_image';
import Services_card from './Services_card';
import { FaLightbulb, FaRocket, FaMapSigns } from "react-icons/fa";
import { useRef, useState } from 'react';



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
    texte: "Parce que chaque projet mérite une réflexion ciblée, nous bâtissons des plans d'action intelligents pour maximiser vos résultats et devancer vos concurrents.",

  },
  {
    id: 3,
    icon: <FaRocket size={20} />,
    titre: "INNOVATION",
    texte: "À la croisée de la technologie moderne et de la vision, nous créons des solutions innovantes qui propulsent votre entreprise vers l’avenir.",

  },
]

//les skills

const skill = [
  {
    id: 1,
    texte: "Python",
    time: 30,
    percent: 80
  },
  {
    id: 2,
    texte: "Next js / Express js",
    time: 30,
    percent: 75
  },
  {
    id: 3,
    texte: "Ps / Ai / Canva",
    time: 30,
    percent: 70
  },
  {
    id: 4,
    texte: "Data-Base/Data-Analysis",
    time: 30,
    percent: 70
  },
  {
    id: 5,
    texte: "Figma",
    time: 30,
    percent: 80
  },
  {
    id: 6,
    texte: "Agent-IA",
    time: 30,
    percent: 75
  },
]

//les services 
const texte_services = [
  {
    id: 1,
    icon: <FaLightbulb size={20} />,
    titre: "Site web",
    texte: "Nous transformons vos idées en expériences visuelles uniques et inspirantes, conçues pour marquer les esprits et captiver votre audience.",
    lien: "/Apropos",
    texte_lien: "Voir les projets"
  },
  {
    id: 2,
    icon: <FaMapSigns size={20} />,
    titre: "Agent-IA",
    texte: "Parce que chaque projet mérite une réflexion ciblée, nous bâtissons des plans d'action intelligents pour maximiser vos résultats et devancer vos concurrents.",
    lien: "/Apropos",
    texte_lien: "Voir les projets"
  },
  {
    id: 3,
    icon: <FaRocket size={20} />,
    titre: "Data-Analysis",
    texte: "À la croisée de la technologie moderne et de la vision, nous créons des solutions innovantes qui propulsent votre entreprise vers l’avenir.",
    lien: "/Apropos",
    texte_lien: "Voir les projets"
  },
  {
    id: 4,
    icon: <FaRocket size={20} />,
    titre: "Logo & Branding",
    texte: "À la croisée de la technologie moderne et de la vision, nous créons des solutions innovantes qui propulsent votre entreprise vers l’avenir.",
    lien: "/Apropos",
    texte_lien: "Voir les projets"
  },
]


//////////les realisations//////

//liste des projets 
const Liste_projet = [
  {
    id: 1,
    name: "Logo & branding"
  },
  {
    id: 2,
    name: "Marquette"
  },
  {
    id: 3,
    name: "Data-Analys"
  },
  {
    id: 4,
    name: "Web-site"
  },
  {
    id: 5,
    name: "Agent-IA"
  },
  {
    id: 6,
    name: "Machine-learning"
  },
  {
    id: 7,
    name: "Chatbot"
  },
  {
    id: 8,
    name: "App-mobile"
  },
]

//le contenu de chaque type de projets

const Liste_contenus_projet = [
  {
    id: 1,
    categorie: "Logo & branding",
    liste: [1, 2, 3, 4]
  },
  {
    id: 2,
    categorie: "Marquette",
    liste: [11, 22, 33, 44]
  },
  {
    id: 3,
    categorie: "Data-Analys",
    liste: [12, 23, 34, 45]
  },
  {
    id: 4,
    categorie: "Web-site",
    liste: [1, 2, 3, 4]
  },
  {
    id: 5,
    categorie: "Agent-IA",
    liste: [1, 2, 3, 4]
  },
  {
    id: 6,
    categorie: "Machine-learning",
    liste: [1, 2, 3, 4]
  },
  {
    id: 7,
    categorie: "Chatbot",
    liste: [1, 2, 3, 4]
  },
  {
    id: 8,
    categorie: "App-mobile",
    liste: [1, 2, 3, 4]
  },

]

function Helo() {



  const [listOpen, setListOpen] = useState("Logo & branding")
  const ref = useRef(null)
  const isView = useInView(ref, { once: true, amount: 0.1 })


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
      <div className='  h-fit w-full  text-[16px] md:text-[17px] lg:text-[18px] font-mono text-third dark:text-second border-t-2 border-t-primar/20 border-b-2 border-b-primar/20  px-5 md:px-10 lg:px-[60px]  py-20'>

        <Titre text="Nos Valeurs ?" />
        <div className=' flex flex-col  md:flex-row justify-center mt-10  md:justify-between items-center gap-10 md:gap-5 '>
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

      {/* A propos  bg-second dark:bg-third pt-5 md:pt-10  */}
      <div className=' h-fit w-full dark:bg-[#fafafa] bg-[#0d0d0d] py-10 md:py-20  '>
        <div className=' flex flex-col gap-5  px-5 md:px-10 lg:px-[60px]  '>
          <Titre text="Qui suis-je ?" />
          <div className=' flex flex-col-reverse md:grid md:grid-cols-2 mt-5'>
            <div className='h-full  flex flex-col gap-5 my-10   text-[16px] md:text-[17px] lg:text-[18px] font-mono font-semibold text-justify'>
              <div className=' font-mono font-semibold text-justify'>
                Je suis <span className='font-semibold'>Mr ALAIN TANGUY</span> abrevié <span className='font-semibold'>Mr</span><span className='font-semibold text-primar'>.AT</span> est une solution numerique innovante
                et polyvalente. J&apos;incarne une vision alliant <span className='font-semibold text-primar'>creativité, stratégie</span> et <span className='font-semibold text-primar'>technologie</span> pour offrir des solutions adaptées
                et performantes. Ma mission va bien au dela de simples services : J&apos;accompagne les entreprises dans leur transformation
                numérique en leur offrant une expérience sur mesure, où chaque solution est pensée pour maximiser leur potentiel et les
                aider à atteindre leurs objectifs.<br />
                <span className='font-semibold' > Je suis le partenaire idéal qu&apos;il vous faut.</span>
              </div>
              <div className=' text-third mt-5 p-2 h-fit w-fit ring-1 ring-primar  rounded-md bg-primar cursor-pointer'>
                scaler un rdv {/* lien whatsapp */}
              </div>

            </div>
            <div className=' flex justify-center items-center md:my-10  '>
              <div className='flex justify-center items-center'>
                <Image width={500} height={500} src="/imag.png" alt='imag' className='  ' />
              </div>

            </div>
          </div>
          <div className=' flex justify-center items-center mb-10 text-[14px] md:text-[15px] '>
            <Link href="/Apropos" className=' px-2 py-1 h-fit w-fit rounded-md dark:text-third text-second  dark:bg-second/80 bg-third/80 hover:dark:bg-primar hover:bg-primar hover:text-third'> En savoir plus </Link>
          </div>


        </div>

      </div>

      {/* les skills */}
      <div className=' h-fit w-full py-10 md:py-20 '>
        <div className=' flex flex-col gap-5  px-5 md:px-10 lg:px-[60px]'>
          <Titre text="Nos Skills ?" />
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10  mt-5' ref={ref}>
            {
              skill.map((skil) => {
                return (
                  <div key={skil.id}>
                    {isView && <Bar texte={skil.texte} time={skil.time} percent={skil.percent} />}

                  </div>
                )
              })
            }
          </div>
        </div>

      </div>

      {/* les services */}
      <div className=' h-fit w-full pt-5 md:pt-10 dark:bg-[#fafafa] bg-[#0d0d0d]'>
        <div className=' flex flex-col gap-5  px-5 md:px-10 lg:px-[60px] py-10 md:py-20 bg-second dark:bg-third   '>
          <Titre text="Nos Services ?" />
          <div className='  grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              texte_services.map((texte) => {
                return (
                  <div key={texte.id} >
                    <Services_card icone={texte.icon} titre={texte.titre} texte={texte.texte} lien={texte.lien} text_lien={texte.texte_lien} />
                  </div>
                )
              })
            }

          </div>
          <div className=' flex justify-center items-center'>
            <Link href={`/Apropos`} className=' my-10 px-2 py-1 h-fit w-fit rounded-md  dark:bg-second/80 bg-third/80 hover:dark:bg-primar hover:bg-primar text-third font-light text-[14px] md:text-[15px] lg:text-[16px] dark:text-third/80 text-second/80'
            >
              Autres services
            </Link>
          </div>

        </div>
      </div>

      {/* les scores realisés */}
      <div className=' h-fit relative my-10 w-full'>
        <Image
          src="/image.jpg"
          alt='trait '
          color='red'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority={true}
          className=' opacity-5 '
        />
        <div className=' h-fit bg-primar flex justify-center items-center '>
          <div className='px-5 md:px-10 lg:px-[60px] py-10   md:py-20 md:flex  md:justify-center md:items-center md:gap-[150px] '>
            <Score texte='Projet' time={30} taille={75} icon={<FaRocket size={20} />} />
            <Score texte='Contrats' time={30} taille={25} icon={<FaRocket size={20} />} />
            <Score texte='Satisfactions' time={30} taille={100} icon={<FaRocket size={20} />} />

          </div>


        </div>



      </div>

      {/* les les réalisations  */}
      <div className=' h-fit w-full py-10 md:py-20'>
        <div className=' flex flex-col gap-5  px-5 md:px-10 lg:px-[60px]  '>
          <Titre text="Nos Réalisations ?" />
          <FreeScrollCarousel Words={Liste_projet} setListOpen={setListOpen} listOpen={listOpen} />
         <Content_image Liste_contenus_projet={Liste_contenus_projet} listOpen={listOpen} />
        </div>


      </div>

    </div>)

}

export default Helo