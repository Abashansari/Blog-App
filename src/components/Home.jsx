import React from 'react'
import HomeIntro from './HomeIntro'
import HomeBody1 from './HomeBody1'
import HomeBody2 from './HomeBody2'
import HomeBody3 from './HomeBody3'
import HomeBody4 from './HomeBody4'


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
