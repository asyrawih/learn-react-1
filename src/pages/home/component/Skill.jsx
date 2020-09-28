import React from 'react'
import Card from './Card';

const Skill = ({ children, title, skills }) => {
  
  const listOfSkill = skills.map((item, index) => {
    return (
      <Card key={item.id} title={item.name} logo={item.logo} />
    )
  })
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 data-aos="fade-up" className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white" id="scrolly-div-animatePreScroll" >{title}</h1>
          <p data-aos="fade-up" className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {children}
          </p>
        </div>
        <div data-aos="fade-up"  className="flex flex-wrap -m-4 text-center">
          {listOfSkill}
        </div>
      </div>
    </section>

  )
}

export default Skill;