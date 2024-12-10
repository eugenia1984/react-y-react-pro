import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {

  const { counter, elementToAnimate, handleClick} = useCounter({maxCount: 15});

  return (
    <section>
      <h2>CounterHook:</h2>
      <h2 ref={ elementToAnimate }>{counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}
