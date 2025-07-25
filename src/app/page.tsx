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
    
      <div className="grid grid-cols-1 justify-items-center p-8 " onClick={handleCloseModal}>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          prize={prize}
        />
        <div className="grid grid-cols-1 justify-items-center ">
          {/* <h1 className='text-7xl my-1 mb-2 text-center'>Ruleta 4G Max</h1> */}
          <Image className="rounded-2xl object-contain" src="/images/logo_credicard_horizontal.png" alt="Logo Credicard" width={600} height={200}/>
           
        </div>
          <WheelComponent 
            setPrizeText={setPrize}
            setWinner={setWinner}
          />
      
      </div>


  );
}
