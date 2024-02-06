import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'

import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <>
      <BrowserRouter>
        <Nav isOpen={isOpen} handleToggle={handleToggle}/>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
