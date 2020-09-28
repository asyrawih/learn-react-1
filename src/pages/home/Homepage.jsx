import React, { Component } from 'react';
import { Navbar } from '../../components';
import photoProfile from './component/hanan.jpg'
import { Skill , Hero } from './component';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Navbar />
        <Hero
          images={photoProfile}
          title="Hai Sahabat ! 😗"
        >
          <p>
            Nama saya <b>Hanan asyrawi</b> saya Seorang web developer
            pengalaman berselancar di dunia pemograman sangat lah saya gemari sejak
            duduk di bangku smp karena buat saya pemograman ialah jalan ninja ku :v
          </p>
        </Hero>
        <Skill>
          Tentu saja seorang developer takluput dengan bahasa yang di gunakan sebagai 
          alat tempur dalam menyelesaikan suatu problem tertentu . bahasa yang saat ini
          yang saya percayai dalam menyelesaikan masalah ialah
        </Skill>
      </div>
    );
  }
}

export default Homepage;