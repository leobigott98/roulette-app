"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

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

export default function WheelComponent() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className='flex mx-auto space-x-10'>
      <button className='' onClick={handleSpinClick}>GIRAR</button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false);
        }}        
      />
    </div>
  )
}