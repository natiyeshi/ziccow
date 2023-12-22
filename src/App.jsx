import { useState } from 'react'
import Header from './components/hero'
import Enjoy from "./components/enjoy"
import Difference from "./components/difference"
import Help from './components/help'
import Properties from './components/properties'
import Agents from './components/agents'
import Footer from "./components/footer"
import Nav from "./components/nav"

function App() {
  return (
    <div className='absolute' style={{background:"#CCE3FC"}}>
      <Nav />
      <Header /> 
      <Enjoy />
      <Difference />
      <Help />
      <Properties />
      <Agents />
      <Footer />
    </div>
  )
}

export default App
