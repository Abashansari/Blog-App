import React from 'react'
import abash from '../assets/abash.jpeg'

export default function CardItems({author,title,introduction,image,summary,thoughts,date}) {
  return (
    <>
<div className="card text-center">
  <div className="card-header">
    {author}
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{introduction}</p>
    <img src={`http://localhost:5000/upload/${image}`} className="card-img-center" style={{width:'100%',height:'350px'}} ></img>
    <p className="card-text">{summary}</p>
    <p className="card-text">{thoughts}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
{/* --------------------------- */}

<div className="card" style={{width: "35rem"}}>
  <img src={`http://localhost:5000/upload/${image}`} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{introduction}</p>
    <a href="#" class="btn btn-primary"></a>
  </div>
  <div className="card-footer text-body-secondary">
    <h5 className="card-title">{author}</h5> 
    <br />
   <p className="card-text">{date}</p>
  </div>
</div>

</>
  )
}
