import React from 'react'
import abash from '../../assets/abash.jpeg'
import Blogs from '../../pages/Blogs'


export default function HomeBody1() {
  return (
    <div className='container mt-6'>
      <h1>Posts</h1>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={abash} className="img-fluid rounded-start" alt="..." />
          </div>
          <Blogs />
        </div>
      </div>
    </div>
  )
}
