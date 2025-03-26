'use client'
import WheelComponent from "@/components/Wheel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
  const [prize, setPrize] = useState('');
  const [winner, setWinner] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=> setOpenModal(true);
  const handleCloseModal = ()=> setOpenModal(false);

  useEffect(()=>{
    if(winner){
      handleOpenModal()
    }
  },[winner])

  return (
    
      <div className="grid grid-cols-1 justify-items-center p-8" onClick={handleCloseModal}>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          prize={prize}
        />
        <div className="grid grid-cols-1 justify-items-center ">
          <h1 className="text-7xl my-1 mb-2 text-center">Ruleta de la Suerte</h1>
          <Image className="rounded-2xl my-10 " src="/images/logo_PYME_Movilnet.jpg" alt="Logo PYME Movilnet" width={600} height={200}/> 
        </div>
        <div className="" style={{width: '100%', height: '100%'}}>
          <WheelComponent 
            setPrizeText={setPrize}
            setWinner={setWinner}
          />
        </div>       
      </div>


  );
}
