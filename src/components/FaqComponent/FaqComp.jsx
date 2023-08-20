import React from 'react'
import './faq.css'
import BasicAccordion from './Accourdinan'
const FaqComp = () => {
  return (
    <div className='faqcontainer'>
        <div className="faqMain">
            <div className="leftFaqContainer">
                <h1>FAQ</h1>
                <p>Check out the most common questions our customers asked and if you Still have questions, Contact our customer support.</p>
            </div>
            <div className="rightFaqContainer">
                <div className="rightDiv">
                <BasicAccordion/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqComp