import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className="gpt3__feature-container__feature gradient__text">
      <div className="gpt3__features-container__feature-tile">
      <div />
      <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature