import React from 'react'
import Link from 'next/link'
function Services_card(
    { icone, titre, texte, lien, text_lien }:
        {
            icone: React.JSX.Element,
            titre: string,
            texte: string,
            lien: string,
            text_lien: string
        }
) {
    return (
        <div className='relative h-fit w-full  mt-20 md:mt-[100px] text-[16px] md:text-[17px] lg:text-[18px] font-mono text-third dark:text-second '>
            <div className=' flex justify-center items-center absolute z-10  h-[75px] w-[75px]  lg:h-[100px] lg:w-[100px] bg-second dark:bg-third rounded-full -mt-[40px] lg:-mt-[50px] ml-[40px]'>
                <div className=' flex justify-center items-center h-[50px] w-[50px]   lg:h-[75px] lg:w-[75px] rounded-full bg-primar p-2 '>
                    {icone}
                </div>

            </div>
            <div className='  w-fit bg-[#0d0d0d] dark:bg-[#fafafa] shadow-sm  rounded-2xl hover:dark:bg-primar hover:bg-primar hover:shadow-md ' >
                <div className=' flex flex-col justify-start gap-5  mt-[75px] mx-[40px] pt-[60px] lg:pt-20  '>
                    <div className='font-bold'>
                        {titre}
                    </div>
                    <div className='font-light text-[14px] md:text-[15px] lg:text-[16px] text-third/80 dark:text-second/80 '>
                        {texte}
                    </div>
                    <Link href={`${lien}`} className=' my-10 px-2 py-1 h-fit w-fit rounded-md  dark:bg-second/80 bg-third/80 hover:dark:bg-second hover:bg-third hover:dark:text-third hover:text-second font-light text-[14px] md:text-[15px] lg:text-[16px] dark:text-third/80 text-second/80'
                    >
                        {text_lien}
                    </Link>


                </div>


            </div>
        </div>
    )
}

export default Services_card