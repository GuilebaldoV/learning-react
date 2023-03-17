import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Calculator from './components/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>

    <Calculator></Calculator>
    </>
  )
}

export default App
