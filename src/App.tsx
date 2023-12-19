import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Destination from './pages/Destination'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
