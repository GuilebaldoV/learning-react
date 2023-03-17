import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/CounterNormal'
import CounterPRO from './components/CounterP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Use Reducers</h1>
    <Counter></Counter>
    <CounterPRO></CounterPRO>
    </>
  )
}

export default App
