import React, { useEffect } from 'react';
import { Footer, Navbar } from './components';
import Homepage from './pages/home/Homepage';

import AOS from 'aos'
import 'aos/dist/aos.css'

const animation = () => {
  AOS.init({
    duration: 1000
  })
}

const App = () => {
  
  useEffect(animation, [animation]);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
