import { FC, useState, useEffect } from 'react'

const MAXIMUN_COUNT = 10

const CounterEffect: FC = () => {
  const [counter, setCounter] = useState<number>(5)

  const handleClick = () => { 
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return

    console.log('Se llego al valor máximo')

  }, [counter])

  return (
    <>
      <h1>Counter Effect: { counter }</h1>
      <button onClick={ handleClick }>+1</button>
    </>
  )
}

export default CounterEffect