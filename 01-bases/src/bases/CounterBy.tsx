import { FC, useState } from 'react'

interface CounterProps {
  initialValue?: number
}

interface CounterState { 
  counter: number,
  clicks: number
}

const CounterBy: FC<CounterProps> = ({ initialValue = 5 }) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  })

  const { counter, clicks } = counterState
  
  const handleClick = (value: number) => {
    setCounterState(({ clicks, counter}) => ({
      counter: counter + value,
      clicks: clicks + 1
    }))
  }

  return (
    <>
      <h1>Counter: { counter }</h1>
      <h2>Clicks: { clicks }</h2>
      <button onClick={ () => handleClick(1) }>+1</button>
      <button onClick={ () => handleClick(5) }>+5</button>
    </>
  )
}

export default CounterBy