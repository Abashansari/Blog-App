import React from 'react'

export default function HomeBody4() {
  return (
    <div className='container '>
        <hr />
        <div className='row'>
          <div className='col-md-7 title is-3 has-text-weight-bold is-uppercase text-black d-flex align-items-center justify-content-center' style={{ textAlign: 'center', color: '#FF8C00' }}>
            Never Miss a New Post.
          </div>
          <div className='col-md-4'>
            <div className="col-12">

              <label htmlFor="email" className="form-label text-dark fw-bold mb-2">
                Enter your Email*
              </label>

              <div className='row g-2 align-items-center'>
                <div className='col-9'>
                  <input type="email" id="email" className="form-control border-dark shadow-sm" placeholder="you@example.com" />
                </div>
                <div className='col-3'>
                  <button type='submit' className='btn' style={{ backgroundColor: '#FF8C00', color: 'white' }}>Subscribe</button>
                </div>
              </div>

              <div className="form-check mt-2">
                <input className="form-check-input border-black" type="checkbox" id="invalidCheck" required />
                <label className="form-check-label text-dark" htmlFor="invalidCheck">
                  Yes, subscribe me for more joyful blogs*
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
  )
}