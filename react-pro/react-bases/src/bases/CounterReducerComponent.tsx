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

  const { counter, changes} = state;

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0
      }

    case 'increaseBy':
      return {
        counter: counter + action.payload.value,
        changes: changes +1,
        previous: counter
      }
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {
  
  const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => { 
    dispatch( { type: 'reset'})
  }

  const increaseBy = ( value: number ) => {
    // dispatch( { type: 'increaseBy', payload: { value: value }})
    dispatch( { type: 'increaseBy', payload: { value }})
  }

  return (
    <section>
      <h2>Counter Reducer Component:</h2>
      <pre>
        { JSON.stringify( counterState, null, 2) }
      </pre>
      <button onClick={() => increaseBy(1)} className="counter-btn">
        + 1
      </button>
      <button onClick={() => increaseBy(5)} className="counter-btn">
        + 5
      </button>
      <button onClick={() => increaseBy(10)} className="counter-btn">
        + 10
      </button>
      <button onClick={handleReset} className="counter-btn">
        Reset
      </button>
    </section>
  )
}
