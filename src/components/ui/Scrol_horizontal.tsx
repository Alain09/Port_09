"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect} from "react";

export default function FreeScrollCarousel({Words,setListOpen,listOpen}:
  { Words: {
  id: number;
  name: string;
}[],
setListOpen:React.Dispatch<React.SetStateAction<string>>,
listOpen:string,
}

) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true });

  // Permet de recentrer la liste au chargement
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex space-x-4 ">
          {Words.map((word) => (
            <div
              onClick={()=>setListOpen(word.name)}
              key={word.id}
              className= {`bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold flex-shrink-0 cursor-pointer ${word.name === listOpen && "bg-primar"} `}
            >
              {word.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
