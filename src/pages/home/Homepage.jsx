import React, { Component } from 'react';
import { Navbar } from '../../components';
import Hero from './component/Hero';
import photoProfile from './component/hanan.jpg'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar />
        <Hero
          images={photoProfile}
        >
          Hai ! nama saya Hanan asyrawi Saya Seorang web developer
          dan baris code adalah hobi saya
        </Hero>
      </div>
    );
  }
}

export default Homepage;