import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from "./components/contador"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Memorizacion en react</h1>
      <h3><a href='https://es.reactjs.org/docs/react-api.html#reactmemo' target="_blank" rel="noreffer">Memo</a></h3>
      <h2>Teoria</h2>
      <p>No abusar usar solo con llamadas a api, commpoentes grandes o muchos elementos en una lista</p>
    
      <h2>useCallback</h2>
      <p>Memoriza una funcion qpara no volverla a definir en cada render</p>
    <p>Usalo siempre que se pase una funcion como proprp a un compoenten</p>
    <p>usar seimpre que se pase una funcion como parametro de un efecto</p>
    <hr></hr>
    <h3>UseMemo</h3>
    <p></p>
    
    <Counter></Counter>

    </div>
  )
}

export default App
