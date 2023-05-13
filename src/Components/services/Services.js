import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Services() {
  return (
    <div>
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      interval = {1000}
      >
        <div>
            <img src="assets/3.jpg" alt="Item1" />
            <p className='legend' >Full Stack</p>
        </div>
        <div>
            <img src="assets/4.jpg" alt="Item2" />
            <p className='legend'>Peer-to-Peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}
