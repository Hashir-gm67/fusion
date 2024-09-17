import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Mission from './components/Mission'
import Deliver from './components/Deliver'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <div>
   <Navbar />
   <HeroSection/>
   <Mission/>
   <Deliver/>
   <Newsletter/>
   <Footer/>
    </div>
  )
}

export default App
