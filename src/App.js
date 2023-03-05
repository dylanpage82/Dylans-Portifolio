import AboutMe from "./components/AboutMe/AboutMe"
import Cert from "./components/Cert/Cert"
import Skills from "./components/Skills/Skills"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Window from "./components/Window/Window"
import {useState} from 'react'
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from "./pages/HomePage/HomePage"
export default function App() {
  const [windows, setWindows] = useState(false)
  return(
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage windows={windows} setWindows={setWindows}/>} />
    </Routes>
    </>
  

  )
}

