import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage"/>
      </div>
      <div className="gpt3__possibility-content gradient__text">
        <h4>Request Early access to get started</h4>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Tu sabes con tu me gustariiiiia, tocarte y poderme acercarrr (no no no) quise todo lo que dariiiia si solo te dejes a llevar (dime Chencho) no pierdas mas el tiempoooo solo quiero conocerteeee. Mientras te voy conociendooo, lo suficiente pa hacer algo indencente</p>
      </div>
    </div>
  );
}

export default Possibility