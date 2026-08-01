import React, { useRef } from 'react'
import gsap, { Expo, Power0 } from 'gsap'
import './Button.css'

export default function Button({placeholder, type, onClick,backgroundColor, hoverBgColor }) {
    const textRef = useRef()
    const buttonref = useRef()
    const handleMouseEnter = () => {
        gsap.to(textRef.current, {
            y : -26,
            ease: 'power3.inOut',
        })

        gsap.to(buttonref.current, {
            backgroundColor : hoverBgColor
        })
    }

    const handleMouseLeave = () => {
        gsap.to(textRef.current, {
            y : 0,
            ease: 'power3.inOut'
        })

        gsap.to(buttonref.current, {
            backgroundColor : backgroundColor
        })
    }
  return (
    <div className='button'>
        <button ref={buttonref} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={onclick}><h3 ><p ref={textRef}>{placeholder} <br /> {placeholder}</p></h3></button>
    </div>
  )
}
