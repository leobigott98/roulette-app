"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

const data = [
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' }  },
  { option: 'Carro', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Botella', style: { backgroundColor: 'brown', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Casa', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Carro', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Botella', style: { backgroundColor: 'brown', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Casa', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Carro', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Botella', style: { backgroundColor: 'brown', textColor: 'black' } },
  { option: 'Intente de nuevo', style: { backgroundColor: 'pink', textColor: 'black' } },
  { option: 'Casa', style: { backgroundColor: 'red', textColor: 'black' } },
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