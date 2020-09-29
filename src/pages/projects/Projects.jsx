import React from 'react';
import { CardProjects, HeaderProjects } from './component';

import { projectsData } from '../../mocks/data'

const Projects = () => {

  const listOfProjects = projectsData.map(item => (
    <CardProjects
      projecName={item.projectName}
      title={item.title}
      desc={item.desc}
    />
  ))

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <HeaderProjects title="The Projects" />
        <div className="flex flex-wrap -m-4">
          {listOfProjects}
        </div>
      </div>
    </section>
  );
}

export default Projects;