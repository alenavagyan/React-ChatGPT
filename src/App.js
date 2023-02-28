import './App.css';
import './index.css';

import {Brand, Cta, Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';

function App() {
  return (
    <div className="App gradient__bg">
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
