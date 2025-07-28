import React from 'react'
import '../App.css'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (

    <footer className="footer primary-black">

      {/* Social media */}
      <div className='container mb-3'>
        <XIcon />   <YouTubeIcon />   <InstagramIcon />   <LinkedInIcon /> <br />
      </div>

      {/* info */}
      <div className='container'>
        <h1 className="title is-1 has-text-weight-bold has-text-dark is-uppercase">
          Stack <span class="has-text-primary">STORIES</span>
        </h1>
        <h2 className="subtitle is-4 has-text-grey-dark">
          Navigating the world of <strong>MERN</strong> & Beyond
        </h2>
        {/* <img src={smallLogo} alt='logo' width='150' /> <br /> */}
        816-725-9866 <br />
        <a href='https://mail.google.com/mail/u/0/#sent?compose=new' style={{ color: 'white' }}>ansariabash2004@gmail.com</a>
      </div>

      {/* Form to contact us */}
      <div>
        <hr />
        <h2 className="subtitle is-1 has-text-grey-white mb-0"><strong>Contact</strong></h2>
<h3 className="subtitle is-4 has-text-grey-white mb-6">Ask me anything</h3>
    <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label subtitle is-4 has-text-grey-dark">First name</label>
            <input type="text" id="firstName" className="underline-input" required />
          </div>

          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label subtitle is-4 has-text-grey-dark">Last name</label>
            <input type="text" id="lastName" className="underline-input" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label subtitle is-4 has-text-grey-dark">Email</label>
            <input type="email" id="email" className="underline-input" />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label subtitle is-4 has-text-grey-dark">Leave Us a Message...</label>
            <textarea id="message" className="underline-input" ></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit" style={{ background: 'transparent', border: '2px solid white'}}>Submit</button>
          </div>
        </form>


      </div>

      {/*  */}
      <hr />
      <div className="content has-text-centered mt-6">
        <p>
          <strong>Blog App</strong> by <strong>Abash Ansari</strong> <br />
          Powered and secured by Stack Stories

          <p>&copy; 2025 Stack Stories. All rights reserved.</p>
        </p>
      </div>
    </footer>

  )
}
