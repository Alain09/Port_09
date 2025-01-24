import React from 'react'

function Titre({ text }: { text: string }) {
  return (

    <div className=' h-[30px] md:h-[40px] w-fit text-center flex flex-row 
     justify-center items-center text-[16px] md:text-[18px]  '>
      <div className=' h-full w-[5px] md:w-[10px] bg-primar'></div>
      <div className='p-2 h-full w-fit flex  justify-center items-center  dark:text-second text-third  font-bold'>{text}</div>
    </div>
  )
}

export default Titre