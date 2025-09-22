import React from 'react'
import HomeIntro from '../components/Home/HomeIntro.jsx'
import HomeBody1 from '../components/Home/HomeBody1.jsx'
import HomeBody2 from '../components/Home/HomeBody2.jsx'
import HomeBody3 from '../components/Home/HomeBody3.jsx'
import HomeBody4 from '../components/Home/HomeBody4.jsx'

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
