import React, { Component } from 'react';
import { Navbar } from '../../components';
import photoProfile from './component/hanan.jpg'
import { Skill, Hero } from './component';

class Homepage extends Component {

  render() {

    const skills = [
      { id: 1, name: 'JavaScript', logo: "https://img.icons8.com/clouds/100/000000/github.png" },
      { id: 2, name: 'Python', logo: "https://img.icons8.com/dusk/128/000000/python.png" },
      { id: 3, name: 'PHP', logo: "https://img.icons8.com/dusk/128/000000/php-logo.png" },
      { id: 4, name: 'DART', logo: "https://img.icons8.com/color/100/000000/dart.png" }
    ]

    return (
      <div className="homepage">
        <Navbar />
        <Hero
          images={photoProfile}
          title="Hai Sahabat ! 😗"
        >
          Nama saya <b>Hanan asyrawi</b> saya Seorang web developer
            pengalaman berselancar di dunia pemograman sangat lah saya gemari sejak
            duduk di bangku smp karenanya saya dan pemograman ialah jalan ninja ku 😎
        </Hero>
        <Skill
          title="Alat Tempur"
          skills={skills}
        >
          Tentu saja seorang developer takluput dengan bahasa yang di gunakan sebagai
          alat tempur dalam menyelesaikan suatu problem tertentu . bahasa yang saat ini
          yang saya percayai dalam menyelesaikan masalah ialah
        </Skill>

        <Skill
          title="Framework"
          skills={skills}
        >
          Tentu saja seorang developer takluput dengan bahasa yang di gunakan sebagai
          alat tempur dalam menyelesaikan suatu problem tertentu . bahasa yang saat ini
          yang saya percayai dalam menyelesaikan masalah ialah
        </Skill>
      </div>
    );
  }
}

export default Homepage;