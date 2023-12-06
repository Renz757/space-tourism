import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Home'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
