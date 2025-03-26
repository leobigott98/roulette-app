"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react'

// Dynamically import react-custom-roulette with SSR disabled
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });

type Props = {
  setPrizeText: (arg0:string)=>void
  setWinner: (arg0:boolean)=>void
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
    }

  }

  return (
    <div className='grid grid-cols-1 justify-items-center mx-auto space-x-10'>
      <div className='mx-auto'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          onStopSpinning={() => {
            setMustSpin(false);
            setPrizeText(data[prizeNumber].option)
            setWinner(true)
            setClickable(true)
          }}        
        />
      </div>
      
      <button className={clickable? 'rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-blue-300 hover:bg-blue-400' : 'rounded-2xl mx-auto  p-4 my-auto  mt-2 bg-gray-300 text-gray-500'} onClick={handleSpinClick} disabled={!clickable}>GIRAR</button>
    </div>
  )
}