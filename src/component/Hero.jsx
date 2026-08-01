import React, { useRef } from 'react';
import Button from './Button';
import './Hero.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Hero() {
  const heroRef = useRef();

  const text1 = 'UI UX';
  const subText1 = "Design"
  const text2 = 'Web Development';
  const text3 = 'Agency';
  const para =
    'We design high-performing websites, mobile apps, and SaaS platforms that delight users. And we build websites that turn those experiences into results. Enhance your brand, drive sales, and grow your revenue with us.';

  const logos = [{}, {}, {}, {}];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.line1 span', {
      y: 80,
      opacity: 0,
      stagger: 0.03,
      duration: 0.7,
    })
      .from(
        '.amp',
        {
          scale: 0,
          opacity: 0,
          rotate: -180,
          duration: 0.6,
        },
        '-=0.35'
      )
      .from(
        '.line2 span',
        {
          y: 80,
          opacity: 0,
          stagger: 0.03,
          duration: 0.7,
        },
        '-=0.4'
      )
      .from(
        '.line3 span',
        {
          y: 80,
          opacity: 0,
          stagger: 0.03,
          duration: 0.7,
        },
        '-=0.45'
      )
      .from(
        '.para span',
        {
          y: 20,
          opacity: 0,
          stagger: 0.015,
          duration: 0.4,
        },
        '-=0.3'
      )
      .from(
        '.bottom',
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.2'
      );
  }, { scope: heroRef });

  return (
    <div className="hero" ref={heroRef}>
      <div className="herocon">
        <div className="headings">
          <div className="one">
            <h1 className="line1" style={{ fontStyle: "italic" }}>
              {text1.split('').map((char, i) => (
                <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h1>
            <h1 className="line1">
              {subText1.split('').map((char, i) => (
                <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h1>

            <h1 className="amp">&</h1>
          </div>

          <div className="two">
            <h1 className="line2">
              {text2.split('').map((char, i) => (
                <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h1>

            <h1 className="line3">
              {text3.split('').map((char, i) => (
                <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h1>
          </div>
        </div>

        <div className="para">
          <p>
            {para.split(' ').map((word, i) => (
              <span key={i}>
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        <div className="bottom">
          <Button backgroundColor="#9AFD0D" hoverBgColor="#fff" placeholder="Book a Call" />
          <div className='logos'>

            {logos.map((_, i) => (
              <div className="logo" key={i}>
                <img src="" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}