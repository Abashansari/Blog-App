import React from 'react'
import abash from '../assets/abash.jpeg'

export default function CardItems({author,title,introduction,image,summary,thoughts}) {
  return (
    <>
<div className="card text-center">
  <div className="card-header">
    {author}
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{introduction}</p>
    <img src={`http://localhost:5000/upload/${image}`} className="card-img-center" ></img>
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
