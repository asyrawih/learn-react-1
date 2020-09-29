import React from 'react';
import { Footer, Navbar } from './components';
import About from './pages/about/About';
// import Homepage from './pages/home/Homepage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <About />
      <Footer />
    </div>
  );
}

export default App;
