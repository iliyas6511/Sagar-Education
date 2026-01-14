import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import NewsSticker from './Components/NewsSticker'
import HeroSlider from './Components/HeroSlider'
import HomePage from './Pages/HomePage'
import Navigation from './Routes/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      
    </>
  )
}

export default App
