import React from 'react'
import HomeIntro from './Home/HomeIntro.jsx'
import HomeBody1 from './Home/HomeBody1.jsx'
import HomeBody2 from './Home/HomeBody2.jsx'
import HomeBody3 from './Home/HomeBody3.jsx'
import HomeBody4 from './Home/HomeBody4.jsx'


export default function Home() {
  return (
    <div className='container'>
      <HomeIntro />
      <HomeBody1 />
      <HomeBody2 />
      <HomeBody3 />
      <HomeBody4 />
    </div>
  )
}
