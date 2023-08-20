import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './feedback.css'
import customerFeedback from './customerFeedback';

const Feedback = () => {

  return (
    <div className='feed'>
        <Carousel
      showThumbs={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={5000} 
    >
      {customerFeedback.map((feedback) => (
        <div key={feedback.id} className="feedback-slide">
          <h3>{feedback.name}</h3>
          <p>{feedback.feedback}</p>
          <p style={{marginBottom:'10px'}}>Rating: {feedback.rating}/5</p>
        </div>
      ))}
    </Carousel>
    </div>
  )
}

export default Feedback