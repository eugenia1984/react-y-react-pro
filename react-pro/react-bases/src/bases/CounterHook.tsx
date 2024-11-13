import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {

  const { counter, counterElement, handleClick} = useCounter();

  return (
    <section>
      <h2>CounterHook:</h2>
      <h2 ref={ counterElement }>{counter}</h2>
      <button onClick={handleClick} className="counter-btn">
        + 1
      </button>
    </section>
  )
}
