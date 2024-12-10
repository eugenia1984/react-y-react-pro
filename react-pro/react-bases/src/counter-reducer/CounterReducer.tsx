import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
// import { doIncreaseBy, doReset } from './actions/action';
import * as actions from './actions/action';

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20
}

export const CounterReducerComponent = () => {
  
  const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => { 
    dispatch( actions.doReset() )
  }

  const increaseBy = ( value: number ) => {
    dispatch( actions.doIncreaseBy(value) )
  }

  return (
    <section>
      <h2>Counter Reducer :</h2>
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
