import React from 'react'
import abash from '../assets/abash.jpeg'

export default function HomeBody2() {
  return (
    <div>
        <div className='container mt-6'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title title is-3 has-text-weight-bold is-uppercase text-black">
                “The path isn’t always clear, but your feet know how to
                <span className="has-text-primary"> walk</span>.”
              </h5>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={abash} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}
