import React from 'react'
import abash from '../assets/abash.jpeg'

export default function HomeBody3() {
  return (
    <div className='container mt-6'>
        <h1>Always Makes Me Smile</h1>
        <div className='row mt-4'>
          <div className='col-md-3'>
            <img src={abash} alt='abash' className="img-fluid mb-3" />
            <img src={abash} alt='abash' className="img-fluid mb-3" />
          </div>
          <div className='col-md-3'>
            <img src={abash} alt='abash' className="img-fluid mb-3" />
            <img src={abash} alt='abash' className="img-fluid mb-3" />
          </div>
          <div className='col-md-3'>
            <img src={abash} alt='abash' className="img-fluid mb-3" />
            <img src={abash} alt='abash' className="img-fluid mb-3" />
          </div>
          <div className='col-md-3'>
            <img src={abash} alt='abash' className="img-fluid mb-3" />
            <img src={abash} alt='abash' className="img-fluid mb-3" />
          </div>
        </div>
      </div>

  )
}
