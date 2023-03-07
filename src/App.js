import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from "./pages/HomePage/HomePage"
export default function App() {
  
  return(
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage/>} />
    </Routes>
    </>
  

  )
}

