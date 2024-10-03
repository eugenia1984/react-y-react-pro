import './App.css'
import  { FirstComponent } from './components/FirstComponent'
import { CounterApp } from './components/CounterApp'

export const App = () => {
  return (
    <>
      <FirstComponent title="Hi!" />
      <CounterApp value={3} />
    </>
  )
}
