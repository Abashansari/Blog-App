import React from 'react'
import abash from '../assets/abash.jpeg'

export default function CardItems({author,title,introduction,img,summary,thoughts}) {
  return (
    <>
      {/* <div className="card" style={{ width: "18rem;" }}>
        <img src={abash} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     */}


<div className="card text-center">
  <div className="card-header">
    {author}
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{introduction}</p>
    {/* <img src={img} class="card-img-center" alt="..."></img> */}
    <p className="card-text">{summary}</p>
    <p className="card-text">{thoughts}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>


</>
  )
}
