import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='nav'>
      <div className='box'>
        <div className="logo"></div>
        <Link className='links'>Services</Link>
        <Link className='links'>Work</Link>
        <Link className='links'>About Us</Link>
        <Link className='links'>Blog</Link>
        <Button backgroundColor="#fff" hoverBgColor="#9AFD0D" placeholder={"Get Started"}/>
      </div>
    </div>
  )
}
