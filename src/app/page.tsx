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
          <h1 className="text-3xl my-1 mb-2">Ruleta de la Suerte</h1>
          <Image className="rounded-2xl mb-2" src="/images/logo_PYME_Movilnet.jpg" alt="Logo PYME Movilnet" width={200} height={100}/> 
        </div>
        <div className="block">
          <WheelComponent 
            setPrizeText={setPrize}
            setWinner={setWinner}
          />
        </div>       
      </div>


  );
}
