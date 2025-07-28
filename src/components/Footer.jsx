import React from 'react';
import '../App.css';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="footer primary-black text-white py-5">

      {/* Main container */}
      <div className="container">
        <div className="row">
          
          {/* Left Section: Social + Info */}
          <div className="col-md-5 mb-5">
            <div className="mb-3">
              <XIcon /> <YouTubeIcon /> <InstagramIcon /> <LinkedInIcon />
            </div>

            <h1 className="title is-3 has-text-weight-bold is-uppercase text-white">
              Stack <span className="has-text-primary">STORIES</span>
            </h1>
            <h2 className="subtitle is-5 text-light">
              Navigating the world of <strong>MERN</strong> & Beyond
            </h2>
            <p className="text-light mb-1">816-725-9866</p>
            <a
              href="mailto:ansariabash2004@gmail.com"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              ansariabash2004@gmail.com
            </a>
          </div>

          {/* Right Section: Form */}
          <div className="col-md-7">
            <h2 className="subtitle is-3 text-white mb-1"><strong>Contact</strong></h2>
            <h3 className="subtitle is-5 text-light mb-4">Ask me anything</h3>

            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label text-light">First name</label>
                <input type="text" id="firstName" className="underline-input" required />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label text-light">Last name</label>
                <input type="text" id="lastName" className="underline-input" required />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label text-light">Email</label>
                <input type="email" id="email" className="underline-input" />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label text-light">Leave Us a Message...</label>
                <textarea id="message" className="underline-input" rows="3"></textarea>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ background: 'transparent', border: '2px solid white', color: 'white' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-4 text-white" />
      <div className="text-center">
        <p>
          <strong>Blog App</strong> by <strong>Abash Ansari</strong><br />
          Powered and secured by Stack Stories
        </p>
        <p>&copy; 2025 Stack Stories. All rights reserved.</p>
      </div>
    </footer>
  );
}
