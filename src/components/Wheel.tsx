"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

const data = [
  { option: 'Gorra Roja', style: { backgroundColor: '#D5D6D2', textColor: 'black' }  },
  { option: 'Gorra Negra', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#2DC901', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#D5D6D2', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#2DC901', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#D5D6D2', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#2DC901', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#D5D6D2', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#2DC901', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#D5D6D2', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Franela', style: { backgroundColor: '#2DC901', textColor: 'black' } },
  { option: 'Cooler', style: { backgroundColor: '#D5D6D2', textColor: 'black' } },
  { option: 'Gorra Roja', style: { backgroundColor: '#FF585F', textColor: 'black' } },
  { option: 'Gorra Negra', style: { backgroundColor: '#2DC901', textColor: 'black' } },
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
    <>
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
      <button onClick={handleSpinClick} style={{margin: 'auto'}}>GIRAR</button>
    </>
  )
}