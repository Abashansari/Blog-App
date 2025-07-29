import React from 'react'
import abash from '../assets/abash.jpeg'

export default function Home() {
  return (
    <><div>This is Home page</div>
    {/* intro part */}
    <div className='container'>
    <div className="card mb-3" style={{Width: "100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={abash} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">My thoughts...</h5>
        <img src={abash} alt='abash' />
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* body parts */}
    <div className='container'>
    <h1>Posts</h1>
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={abash} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

    {/* body parts 2*/}
    <div className='container'>
    <div className='row'>
      <div className='col-md-5'>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
      </div>
      <div className='col-md-5'>
      <div className="col-md-4">
      <img src={abash} className="img-fluid rounded-start" alt="..." />
    </div>
      </div>
    </div>
    </div>

    {/* body parts 3*/}
    <div className='container'>
    <h1>Always Makes Me Smile</h1>
    <div className='row'>
      <div className='col-md-3'>
      
  <img src={abash} alt='abash'/>
  <img src={abash} alt='abash'/>
    </div>
   <div className='col-md-3'>
   <img src={abash} alt='abash'/>
   <img src={abash} alt='abash'/>
   </div>
   <div className='col-md-3'>
   <img src={abash} alt='abash'/>
   <img src={abash} alt='abash'/>
   </div>
   <div className='col-md-3'>
   <img src={abash} alt='abash'/>
   <img src={abash} alt='abash'/>
   </div>
   
   </div>
   </div> 

   {/* body parts 4*/}
   <div className='conteiner'>
    <hr />
    <div className='row'>
      <div className='col-md-7'>
      Never Miss a New Post.
      </div>
      <div className='col-md-4'>
      <div className="col-12">
                <label htmlFor="email" className="form-label text-dark">Enter your Email*</label> 
                <div className='row'>
                  <div className='col-md-11'>
                  <input type="email" id="email" className="underline-input-Home " />
                  </div>
                  <div className='col-md-1'>
                  <button type='submit' style={{background:'purple',color:'white'}}>Submit</button>
                  </div>
                </div>
                  
              </div>

        {/* checkbox */}
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Yes, Subscribe to me for more joyfull blogs*
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
      </div>
    </div>
    <hr />
   </div>
    </>
    
  )
}
