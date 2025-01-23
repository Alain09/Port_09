import React, { useRef, useCallback, MouseEventHandler, useEffect} from "react";

type ModalProps = {
  children: React.ReactNode,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children ,setOpen}) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
 
  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        setOpen(false);
      }
    },
    [ overlay, wrapper,setOpen]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Désactive le scroll
    return () => {
      document.body.style.overflow = ""; // Réactive le scroll
    };
  }, []);

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70"
    >
      <div
       ref={wrapper} 
       onClick={(e)=>{e.stopPropagation()}}
        
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
