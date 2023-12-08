import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Destination from './pages/Destination'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
