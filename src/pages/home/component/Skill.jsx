import React from 'react'
import Card from './Card';

const Skill = ({ children, ...props }) => {

  const skills = [
    { id: 1, name: 'JavaScript', logo: "https://img.icons8.com/clouds/100/000000/github.png" },
    { id: 2, name: 'Python', logo: "https://img.icons8.com/dusk/128/000000/python.png" },
    { id: 3, name: 'PHP', logo: "https://img.icons8.com/dusk/128/000000/php-logo.png" },
    { id: 4, name: 'DART', logo: "https://img.icons8.com/color/100/000000/dart.png" }
  ]

  const listOfSkill = skills.map((item, index) => {
    return (
      <Card key={item.id} title={item.name} logo={item.logo} />
    )
  })

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Alat Perang</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {children}
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {listOfSkill}
        </div>
      </div>
    </section>
  )
}

export default Skill;