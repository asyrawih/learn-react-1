import React from 'react';
import { StepLayout } from './component';
import StepItem from './component/StepItem';

const About = () => {

  const riwaytPendidikan = [
    { id: 1, name: 'SDN 175 KAWARASAN', desc: "2004 - 2010" },
    { id: 2, name: 'SMP 1 TOMONI', desc: "2010 - 2014" },
    { id: 3, name: 'SMA MUHAMADIYAH WOTO', desc: "2014 - 2016" },
    { id: 4, name: 'Universitas Muslim Indonesia', desc: "2017 - presents" },
  ];
  const riwayatPekerjaan = [
    { id: 1, name: 'PickUpz Shipment Aggregator', desc: "2004 - 2010" },
    { id: 2, name: 'GMT Building Management', desc: "2017 - presents" },
  ];

  const ListPendidikan = riwaytPendidikan.map((item, index) => (
    <StepItem key={index}
      title={item.name}
      desc={item.desc}
      steps={index + 1}
      animation="fadeIn"
      delay="100"
    />
  ));
  const ListPekerjaan = riwayatPekerjaan.map((item, index) => (
    <StepItem key={index}
      title={item.name}
      desc={item.desc}
      steps={index + 1}
      animation="fadeIn"
      delay="100"
    />
  ));

  return (
    <div className="about">
      <StepLayout title="Riwayat Pendidikan">
        {ListPendidikan}
      </StepLayout>
      <StepLayout title="Riwat Pekerjaan">
        {ListPekerjaan}
      </StepLayout>
    </div>
  );
}

export default About;