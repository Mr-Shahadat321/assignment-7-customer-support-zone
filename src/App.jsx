import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProgressCard from './components/ProgressCard'
import MainSection from './components/MainSection'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <>  
      <Navbar isOpen= {isOpen} setIsOpen= {setIsOpen}></Navbar>
      <ProgressCard></ProgressCard>
      <MainSection></MainSection>
      
      
      
    </>
  )
}

export default App
