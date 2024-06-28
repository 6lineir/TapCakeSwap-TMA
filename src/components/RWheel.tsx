import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';


const RWheel = () => {

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white', textColor: 'black' } },
    { option: '2', style: { backgroundColor: 'pink', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '4', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '5', style: { backgroundColor: 'blue', textColor: 'black' } }
  ]
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
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      />
      <button className='bg-[#1f1f1f] text-center mt-10 py-2 px-2 rounded-xl' onClick={handleSpinClick}>SPIN</button>
    </div>
  )
}
export default RWheel