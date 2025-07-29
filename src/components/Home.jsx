import React from 'react'
import abash from '../assets/abash.jpeg'

export default function Home() {
  return (
    <><div>This is Home page</div>
      {/* intro part */}
      <div className='container' >
        <div className="card mb-3" style={{ backgroundColor: 'white', border: 'none' }}>
          <div className="row g-0 mb-5">
            <div className="col-md-8">
              <img src={abash} alt="..." />
            </div>

            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title mb-3cmt-5 mt-6" style={{ color: 'black' }}>My thoughts...</h5>

                <p className="card-text mb-5" style={{ color: 'black' }}>    In a world full of likes, shares, and stories that disappear in 24 hours,<br />
                  writing a blog feels like pressing pause. It’s not just content — it’s your thoughts, documented with intention. Unlike social media,<br />
                  which often feels noisy and rushed, blogging gives you the space to reflect, process, and express.</p>

                <img src={abash} alt='abash' className="img-fluid rounded-start" />

                <p className="card-text">
                  Writing a blog is like keeping a diary — but with a little more courage. A diary is for your eyes only,<br />
                  a quiet space to untangle your thoughts. A blog, on the other hand,<br />
                  is where you choose to share those thoughts with the world. That doesn’t mean you have to be loud.<br />
                  It means you’re willing to be seen.
                </p>

                <p className='card-text'>
                  I enjoy scrolling through social media too — it’s quick, fun, and full of inspiration.<br />
                  But when I write a blog, I’m not just reacting to the world around me. I’m creating something of my own.<br />
                  Something real. Something that might help someone else feel seen, understood, or even just a little less alone.
                </p>
                <p className='card-text'>
                  Social media is fast food. Blogging is home-cooked. Both have their place — but one fills you up in a different way.
                </p>


                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* body parts */}
      <div className='container mt-6'>
        <h1>Posts</h1>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
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


      {/* body parts 3*/}
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


      {/* body parts 4*/}
      <div className='conteiner '>
        <hr />
        <div className='row'>
          <div className='col-md-7 title is-3 has-text-weight-bold is-uppercase text-black d-flex align-items-center justify-content-center' style={{ textAlign: 'center' }}>
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
                  <button type='submit' className='btn box-button' style={{ background: 'purple', color: 'white' }}>Subscribe</button>
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
    </>

  )
}
