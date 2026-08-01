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
  // Scale up while scrolling
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
        start: "top 70%",
        end: "center center",
        scrub: true,
      },
    }
  );

  // Pin the video for 100vh worth of scrolling
  ScrollTrigger.create({
    trigger: videoRef.current,
    start: "center center",
    end: "+=100%",
    pin: true,
    pinSpacing: true,
  });

  gsap.to(videoRef.current, {
    scale : 0.3 ,
    scrollTrigger : {
        trigger : videoRef.current,
        markers : true,
        scrub : 1
    }
  })
});


  return (
    <div>
      <div className="video">
        <video autoPlay ref={videoRef} muted loop src={HomeVideo}></video>
      </div>
    </div>
  )
}
