import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import BlogForm from './BlogForm'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'


export default function BlogApp() {
  return (
    <div className='container'>
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/write' element={<BlogForm />} />
          <Route path='/blog' element={<Blogs/>} />
        </Routes>
      </Router>
      <Contact />
    <Footer />
    </div>
  )
}
