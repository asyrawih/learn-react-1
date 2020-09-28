import React, { Component } from 'react';
import photoProfile from '../../assets/img/hanan.jpg'
import { Skill, Hero } from './component';
class Homepage extends Component {
  render() {
    const skills = [
      { id: 1, name: 'JavaScript', logo: "https://img.icons8.com/dusk/64/000000/javascript-logo.png" },
      { id: 2, name: 'Python', logo: "https://img.icons8.com/dusk/128/000000/python.png" },
      { id: 3, name: 'PHP', logo: "https://img.icons8.com/dusk/128/000000/php-logo.png" },
      { id: 4, name: 'DART', logo: "https://img.icons8.com/color/100/000000/dart.png" }
    ]

    const framwork = [
      { id: 1, name: 'Laravel', logo: "https://img.icons8.com/dusk/128/000000/php-logo.png" },
      { id: 2, name: 'Vue', logo: "https://img.icons8.com/color/48/000000/vue-js.png" },
      { id: 3, name: 'React', logo: "https://img.icons8.com/clouds/100/000000/react.png" },
      { id: 4, name: 'Flutter', logo: "https://img.icons8.com/color/100/000000/flutter.png" }
    ]
    return (
      <div className="homepage">

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
          skills={framwork}
        >
          Seiring Pekembangan jaman teknologi pun kian memesat kebutuhan terhadap pasar
          kian membesar . sama hal nya dengan developer bahasa pemograman pun kian berkembang
          dengan pesat demi memenuhi kebutuhan pasar . pengerjaan cepat handal dan stabil
          ialah prioritas utama dalam membangun system yang tepat maka dari itu saya pun
          mempercayakan kepada framework
        </Skill>
      </div>
    );
  }
}

export default Homepage;