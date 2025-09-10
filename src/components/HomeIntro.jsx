import React from 'react'
import abash from '../assets/abash.jpeg'

export default function HomeIntro() {
  return (
   <div className='container' >
        <div className="card mb-3" style={{ backgroundColor: 'white', border: 'none' }}>
          <div className="row g-0 mb-5">
            <div className="col-md-8">
              <img src={abash} alt="..." />
            </div>

            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title mb-3cmt-5 mt-6" style={{ color: 'black' }}>My thoughts...</h5>

                <p className="card-text mb-5 text-dark">    In a world full of likes, shares, and stories that disappear in 24 hours,<br />
                  writing a blog feels like pressing pause. It’s not just content — it’s your thoughts, documented with intention. Unlike social media,<br />
                  which often feels noisy and rushed, blogging gives you the space to reflect, process, and express.</p>

                <img src={abash} alt='abash' className="img-fluid rounded-start" />

                <p className="card-text text-dark">
                  Writing a blog is like keeping a diary — but with a little more courage. A diary is for your eyes only,<br />
                  a quiet space to untangle your thoughts. A blog, on the other hand,<br />
                  is where you choose to share those thoughts with the world. That doesn’t mean you have to be loud.<br />
                  It means you’re willing to be seen.
                </p>

                <p className='card-text text-dark'>
                  I enjoy scrolling through social media too — it’s quick, fun, and full of inspiration.<br />
                  But when I write a blog, I’m not just reacting to the world around me. I’m creating something of my own.<br />
                  Something real. Something that might help someone else feel seen, understood, or even just a little less alone.
                </p>
                <p className='card-text text-dark'>
                  Social media is fast food. Blogging is home-cooked. Both have their place — but one fills you up in a different way.
                </p>


                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}