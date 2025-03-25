'use client'
import WheelComponent from "@/components/Wheel";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [prize, setPrize] = useState('')
  console.log(prize)

  return (
    
      <div className="grid grid-cols-1 justify-items-center p-8">
        <div className="md:flex md:items-center md:space-x-2 sm:grid sm:grid-cols-1 justify-items-center ">
          <Image className="rounded-2xl" src="/images/logo_PYME_Movilnet.jpg" alt="Logo PYME Movilnet" width={200} height={100}/>
          <h1 className="text-3xl">Ruleta de la Suerte Movilnet</h1>
        </div>
        <div className="block">
          <WheelComponent 
            setPrizeText={setPrize}
          />
        </div>
        <h2>{prize}</h2>
        
      </div>


  );
}
