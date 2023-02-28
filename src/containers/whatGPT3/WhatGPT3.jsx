import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin section__padding" id="whatGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="This is a very long text written right here, I just couldn't copy paste any, because a guy in the video uses figma, which is not free anymore" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1>Possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbot" text="Whole front do of plate heard oh ought."/>
        <Feature title="Knowledge Base" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
    </div>
  )
}

export default WhatGPT3