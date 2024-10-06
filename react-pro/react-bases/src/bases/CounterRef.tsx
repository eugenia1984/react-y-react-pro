import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  initialValue?: number
}

const MAXIMUM_COUNT = 10;

export const CounterRef = ({initialValue = 0}: Props) => {
  
  const [counter, setCounter] = useState<number>(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => { 
    setCounter( prev => Math.min(prev + 1, MAXIMUM_COUNT));
  }

  useLayoutEffect(() => {
    if(counter < MAXIMUM_COUNT) return;

    gsap.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .then(() => {
        gsap.to(counterElement.current, {y: 10, duration: 0.2, ease: 'ease.out'})
      });
  }, [counter])

  return (
    <section>
      <h2>CounterEffect:</h2>
      <h2 ref={ counterElement }>{counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}