import { useReducer } from 'react';

interface CounterState {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20
}

type CounterAction = 
  | { type: 'increaseBy', payload: {value: number;} }
  | { type: 'reset' };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0
      }
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {
  
  const [ { counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = () => { 
    dispatch( { type: 'reset'})
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