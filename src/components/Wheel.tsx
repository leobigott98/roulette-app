"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'
import Image from 'next/image';

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

type Props = {
  setPrizeText: (arg0:string)=>void
  setWinner: (arg0:boolean)=>void
}

const data = [
  { option: 'Conecta', style: { backgroundColor: '#d5d6d2', textColor: 'black', } },
  { option: 'Descubre', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: '5G', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: '#d5d6d2', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: '#ff5860', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: '#d5d6d2', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: '5G', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: '#ff5860', textColor: 'black' } },
]

export default function WheelComponent({setPrizeText, setWinner}: Props) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [clickable, setClickable] = useState(true);


  const handleSpinClick = () => {
    if (!mustSpin) {
      setClickable(false);
      setWinner(false);
      setPrizeNumber(0);
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      console.log(prizeNumber)
    }

  }

  return (
    <div className='grid grid-cols-1 justify-items-center mx-auto space-x-10'>
      <div className='mx-auto'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#ff5860', '#2dc9d1']}
          textColors={['#ffffff']}
          onStopSpinning={() => {
            setMustSpin(false);
            setPrizeText(data[prizeNumber].option)
            setWinner(true)
            setClickable(true)
          }} 
          innerBorderWidth={0}      
          innerRadius={10} 
          outerBorderWidth={0}
          radiusLineWidth={0}
          fontSize={15}
          /* pointerProps={
            {src: "/images/logo-movilnet.jpeg"}
          } */
         
        />
      </div>
      <button className={clickable? 'text-4xl rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-[#2dc9d1] hover:bg-[#21949a]' : 'text-4xl rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-gray-300 text-gray-500'} onClick={handleSpinClick} disabled={!clickable}>
        GIRAR
        <Image className="mx-auto rounded-lg m-2" src="/images/logo-movilnet.jpeg" alt="Logo PYME Movilnet" width={100} height={50}/> 
        </button>
    </div>
  )
}