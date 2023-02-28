import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home  from "./components/Home";
import RecipePost from './components/RecipePost';
import SearchSection from './components/Search';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/recipe/:recipeId' element={<RecipePost></RecipePost>}></Route>
      <Route path='search/:search' element={<SearchSection></SearchSection>}></Route>
    </Routes>
    </>
  )
}

export default App
