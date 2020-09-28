import React from 'react';
import { Footer, Navbar } from './components';
import Homepage from './pages/home/Homepage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Homepage />
      <Footer />
    </div>
  );
}

export default App;
