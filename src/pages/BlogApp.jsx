import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import BlogForm from './BlogForm.jsx'
import Blogs from './Blogs.jsx'
import Contact from './Contact.jsx'
import Footer from '../components/Footer.jsx'





export default function BlogApp() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/write' element={<BlogForm />} />
          <Route path='/blog' element={<Blogs />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  )
}
