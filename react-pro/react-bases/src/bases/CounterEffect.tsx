import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

type Props = {
  initialValue?: number
}

const MAXIMUM_COUNT = 10;

export const CounterEffect = ({initialValue = 0}: Props) => {
  
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => { 
    // if(counter === MAXIMUM_COUNT) return;
    // setCounter(prevValue => prevValue + 1);
    setCounter( prev => Math.min(prev + 1, MAXIMUM_COUNT));
  }

  useEffect(() => {
    if(counter < MAXIMUM_COUNT) return;

    gsap.to('#counter-gsap', {y: -10, duration: 0.2, ease: 'ease.out'})
      .then(() => {
        gsap.to('#counter-gsap', {y: 10, duration: 0.2, ease: 'ease.out'})
      });
  }, [counter])

  return (
    <section>
      <h2>CounterEffect:</h2>
      <h2 id="counter-gsap">{counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}
