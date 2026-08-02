import React, { useRef } from 'react'
import HomeVideo from '../../public/homevideo.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

import './Video.css'


gsap.registerPlugin(ScrollTrigger);
export default function Video() {

  const videoRef = useRef()

  useGSAP(() => {
    // 1. Scale up
    gsap.fromTo(
      videoRef.current,
      {
        scale: 0.7,
      },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
      }
    );

    // 2. Pin for 100vh
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
    });

    // 3. Scale down while pinned
    gsap.to(videoRef.current, {
      scale: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  });


  return (
    <div>
      <div className="video">
        <video autoPlay ref={videoRef} muted loop src={HomeVideo}></video>
      </div>
    </div>
  )
}
