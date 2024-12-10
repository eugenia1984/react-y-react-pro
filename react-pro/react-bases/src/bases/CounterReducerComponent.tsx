import { useReducer } from 'react';

interface CounterState {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {
  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleClick = () => { 
    setCounter(prevValue => prevValue + 1);
  }

  return (
    <section>
      <h2>Counter Reducer Component: {counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}
