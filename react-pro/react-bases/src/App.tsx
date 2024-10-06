import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterRef } from "./bases/CounterRef";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15}/>
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterRef />
    </>
  )
}

export default App
