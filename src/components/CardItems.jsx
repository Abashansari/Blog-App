import React from 'react'
import abash from '../assets/abash.jpeg'

export default function CardItems() {
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={abash} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>

  )
}
