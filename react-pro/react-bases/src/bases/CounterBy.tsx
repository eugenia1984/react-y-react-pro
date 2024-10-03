import { useState } from 'react';
import { CounterState } from '../types/counter-state-type';

type Props = {
  initialValue?: number
}

export const CounterBy = ({initialValue = 5}: Props) => {
  
  const [counterState, setCounterState] = useState<CounterState>({
    value: initialValue,
    clicks: 0
  });

  const handleClick = (num: number) => { 
    setCounterState(prev => ({
      value: prev.value + num,
      clicks: prev.clicks + 1
    }));
  }

  const { value, clicks} = counterState;

  return (
    <section>
      <h2>CounterBy: {value}</h2>
      <h2>Click: {clicks}</h2>
      <button onClick={() => handleClick(1)} className="counter-btn">
        + 1
      </button>
      <button onClick={() => handleClick(5)} className="counter-btn">
        + 5
      </button>
    </section>
  )
}
