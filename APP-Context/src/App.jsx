import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyPage from './components/MyApp'
import MyPageContext from './components/MyAppContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyPageContext></MyPageContext>
    <hr></hr>
    <MyPage></MyPage>
    </>

    )
}

export default App
