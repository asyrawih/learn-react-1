import React from 'react';
import { StepLayout } from './component';
import StepItem from './component/StepItem';

function About(props) {
  return (
    <div className="about">
      <StepLayout title="Riwayat Pendidikan">
        <StepItem
          animation="fadeIn"
          delay="100"
          title="SDN 175 KAWARASAN"
          desc="2004 - 2010"
        />
        <StepItem
          animation="fadeIn"
          delay="150"
          title="SMP 1 TOMONI"
          desc="2010 - 2014"
        />
        <StepItem
          animation="fadeIn"
          delay="200"
          title="SMA MUHAMADIYAH WOTO"
          desc="2014 - 2016"
        />
        <StepItem
          delay="220"
          animation="fadeIn"
          title="Universitas Muslim Indonesia"
          desc="2017 - presents"
        />
      </StepLayout>
      <StepLayout title="Riwayat Cinta">
        <StepItem
          animation="fadeIn"
          delay="100"
          title="Tidak Ada"
          desc="2004 - 2010"
        />
        <StepItem
          animation="fadeIn"
          delay="150"
          title="Tidak Ada"
          desc="2010 - 2014"
        />
        <StepItem
          animation="fadeIn"
          delay="200"
          title="Tidak Ada"
          desc="2014 - 2016"
        />
        <StepItem
          delay="220"
          animation="fadeIn"
          title="Tidak Ada"
          desc="2017 - presents"
        />
      </StepLayout>
    </div>
  );
}

export default About;