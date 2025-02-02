import React from 'react'

function Content_image({ Liste_contenus_projet, listOpen }:
    {
        Liste_contenus_projet: {
            id: number;
            categorie: string;
            liste: number[];
        }[],
        listOpen: string,
    }
) {
    return (
        <div> <div className='h-[400px] w-full overflow-x-hidden  text-[16px] md:text-[17px] lg:text-[18px] font-mono bg-primar/25 dark:text-second px-2 md:px-4 lg:px-6 '>

            {Liste_contenus_projet.map((contenus) => {
                return (
                    <>
                        {listOpen === contenus.categorie &&
                            <div key={contenus.id}>
                                <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-5'>
                                    {contenus.liste.map((item, index) =>
                                    (
                                        <div key={index}>
                                            <div className=' h-[300px] w-full bg-blue-300 ring-1 ring-red-800 flex justify-center items-center'>
                                                {item}
                                            </div>
                                        </div>

                                    )
                                    )} </div>
                            </div>
                        }
                    </>
                )
            })

            }

        </div>
        </div>
    )
}

export default Content_image