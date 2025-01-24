import React from 'react'

function Titre({text}:{text:string}) {
  return (
    
    <div className=' h-fit w-fit text-center flex flex-row  justify-center items-center text-[18px] md:text-xl '>
    <div className=' h-[2px] w-[20px] md:w-[40px] lg:w-[60px] bg-third dark:bg-second '></div>
    <div className=' h-[10px] w-[10px] rounded-full bg-third dark:bg-second  '></div>
    <div  className='pl-2 text-primar font-bold'>{text}</div>
  </div>
  )
}

export default Titre