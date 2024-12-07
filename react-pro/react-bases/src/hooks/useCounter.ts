import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const useCounter = () => {

  const [counter, setCounter] = useState<number>(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => { 
    setCounter( prev => Math.min(prev + 1, MAXIMUM_COUNT));
  }

  useEffect(() => {
    if(counter < MAXIMUM_COUNT) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

  }, [counter])

  return {
    counter,
    counterElement,
    handleClick
  }
}