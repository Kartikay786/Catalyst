import React from 'react'
import '../index.css'
import Hero from '../component/Hero'
import Video from '../component/Video'
import SliderCardsSection from '../component/SlidercardsSection'
export default function Home() {
  return (
    <div className='home'>
      
      <Hero />
      <Video/>
      <SliderCardsSection/>
    </div>
  )
}
