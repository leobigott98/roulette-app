"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

type Props = {
  setPrizeText: (arg0:string)=>void
}

const data = [
  { option: 'Gorra Roja', style: { backgroundColor: '#d5d6d2', textColor: 'black' }  },
  { option: 'Gorra Negra', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#d5d6d2', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#ff5860', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#2dc9d1', textColor: 'black' } },
]

export default function WheelComponent({setPrizeText}: Props) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }

  }

  return (
    <div className='md:flex grid grid-cols-1 justify-items-center mx-auto space-x-10'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false);
          setPrizeText(data[prizeNumber].option)
        }}        
      />
      <button className='rounded-2xl mx-auto bg-blue-200 p-4 my-auto hover:bg-blue-300' onClick={handleSpinClick}>GIRAR</button>
    </div>
  )
}