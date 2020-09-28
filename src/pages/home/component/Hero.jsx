import React from 'react';

//Class Constant
const section = 'text-gray-500 bg-gray-900 body-font'
const sectionContainer = 'container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'
const introSection = 'lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'
const githubButton = 'inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
const facebookButton = 'ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
const Hero = (props) => {
  const { images } = props
  return (
    <section className={section}>
      <div className={sectionContainer}>
        <div className={introSection}>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Perkenalkan !</h1>
          <p className="mb-8 leading-relaxed">{props.children}</p>
          <div className="flex justify-center">
            <button className={githubButton}>Github</button>
            <button className={facebookButton}>Facebook</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-md shadow-lg" alt="hero" src={images} />
        </div>
      </div>
    </section>
  );
}

export default Hero;