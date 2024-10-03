import { useState } from 'react';

type Props = {
  initialValue?: number
}

export const Counter = ({initialValue = 0}: Props) => {
  
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => { 
    setCounter(prevValue => prevValue + 1);
  }

  return (
    <section>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}
