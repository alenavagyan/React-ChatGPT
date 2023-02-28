import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Imporving end distrust instantly',
    text: 'Random long english text which needs to be filled in for testing puposes that is why it is here'
  },
  {
    title: 'Become the tendent active',
    text: 'Random long english text which needs to be filled in for testing puposes that is why it is here'
  },
  {
    title: 'Imporving end distrust instantly',
    text: 'Random long english text which needs to be filled in for testing puposes that is why it is here'
  },
  {
    title: 'Imporving end distrust instantly',
    text: 'Random long english text which needs to be filled in for testing puposes that is why it is here'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className=" gradient__text">Future is now and you just need to realise it. Step into future today and make it happen</h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features