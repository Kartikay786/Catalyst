import React from 'react'
import '../index.css'
import Hero from '../component/Hero'
import Video from '../component/Video'
import SliderCardsSection from '../component/SlidercardsSection'
import Portfolio from '../component/Portfolio'
import Testimonials from '../component/Testimonials'
import Strategy from '../component/Strategy'
import Process from '../component/Process'
import Contact from '../component/Contact'
import FAQs from '../component/FAQs'
import GetInTouch from '../component/GetInTouch'
export default function Home() {
  return (
    <div className='home'>
      
      <Hero />
      <Video/>
      <SliderCardsSection/>
      <Portfolio/>
      <Testimonials/>
      <Strategy/>
      <Process/>
      <Contact/>
      <FAQs/>
      <GetInTouch/> 
    </div>
  )
}
