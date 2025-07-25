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
  { option: 'Conecta', style: { backgroundColor: 'rgb(255,130,0)', textColor: 'black', } },
  { option: 'Descubre', style: { backgroundColor: 'rgb(165,0,80)', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: 'rgb(0,152,117)', textColor: 'black' } },
  { option: '5G', style: { backgroundColor: 'rgb(152,30,151)', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: 'rgb(0,169,206)', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: 'rgb(80,8,120)', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: 'rgb(250,70,22)', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: 'rgb(0,87,183)', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: 'rgb(210,39,48)', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: 'rgb(0,183,79)', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: 'rgb(250,70,22)', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: 'rgb(33,87,50)', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: 'rgb(152,30,151)', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: 'rgb(0,169,206)', textColor: 'black' } },
  { option: 'Intenta 1 vez más', style: { backgroundColor: 'rgb(165,0,80)', textColor: 'black' } },
  { option: 'Conecta', style: { backgroundColor: 'rgb(255,130,0)', textColor: 'black' }  },
  { option: 'Descubre', style: { backgroundColor: 'rgb(80,8,120)', textColor: 'black' } },
  { option: 'Comparte', style: { backgroundColor: 'rgb(210,39,48)', textColor: 'black' } },
  { option: '5G', style: { backgroundColor: 'rgb(0,87,183)', textColor: 'black' } },
  { option: 'Gracias por Participar', style: { backgroundColor: 'rgb(0,152,117)', textColor: 'black' } },
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
        <div className="relative z-10" style={{width: '100%', height: '100%'}}>
        <Image className="absolute top-0 bottom-0 h-fit left-0 right-0 mx-auto my-auto flex z-0" src="/images/logo_credicard_vertical.png" alt="Logo PYME Movilnet" width={50} height={50}/>
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
          radiusLineColor='black'
          innerBorderColor='black'
          fontFamily=''
          outerBorderWidth={0}
          radiusLineWidth={0}
          fontSize={15}
          pointerProps={
            {src: "/images/roulette-pointer.png"}
          }
         
        />
        </div>
      </div>
      <button className={clickable? 'text-4xl rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-[#2dc9d1] hover:bg-[#21949a]' : 'text-4xl rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-gray-300 text-gray-500'} onClick={handleSpinClick} disabled={!clickable}>
        <Image className="mx-auto rounded-lg m-2" src="/images/logo_credicard_vertical.png" alt="Logo Credicard" width={100} height={50}/> 
        </button>
    </div>
  )
}