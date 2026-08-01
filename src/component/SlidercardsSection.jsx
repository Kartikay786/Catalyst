import React from 'react'
import SliderCard from './SliderCard'
import "./SliderCardsSection.css"

const SliderCardsSection = () => {
  return (

    <div className="slider-container">
      <div className="slider-track">
        <SliderCard className="card" />
        <SliderCard className="card"/>
        <SliderCard className="card"/>
<SliderCard className="card"/>
        <SliderCard className="card"/>
        <SliderCard className="card"/>
      
      </div>
    </div>
  )
}

export default SliderCardsSection