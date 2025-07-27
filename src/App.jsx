import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import Blogs from './components/Blogs'
import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/write' element={<Form />} />
          <Route path='/blog' element={<Blogs/>} />
        </Routes>
      </Router>
    <Footer />
    </>
  )
}

export default App
