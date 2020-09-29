import React from 'react';
import { CardProjects, HeaderProjects } from './component';

const Projects = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <HeaderProjects title="The Projects" />
        <div className="flex flex-wrap -m-4">
          <CardProjects
            projecName="Commercial Management System"
            title="Telkom"
            desc="Commercil Asset Telkom dari Tingakt Daerah Sampe ke Tingkat Provinsi"
          />
          <CardProjects
            projecName="Building Management System"
            title="Telkom"
            desc="Building Management System Untuk Asset Telkom"
          />
          <CardProjects
            projecName="Telkom Dashboard"
            title="Telkom"
            desc="Pusat Monitor Dari 3 App Web Yang Dibuat Diatas dengan Menghubungkan nya"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;