import React from 'react';
import { Footer, Navbar } from './components';
import About from './pages/about/About';
import Homepage from './pages/home/Homepage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
