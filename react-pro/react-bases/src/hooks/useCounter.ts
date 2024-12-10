import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1}) => {

  const [counter, setCounter] = useState<number>(5);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementToAnimate = useRef<any>(null);

  const handleClick = () => { 
    setCounter( prev => Math.min(prev + 1, maxCount));
  }

  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    
    if ( !elementToAnimate.current ) return;

    tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
      .pause()
  }, [])

  useEffect(() => {  
    tl.current.play(0)
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick
  }
}