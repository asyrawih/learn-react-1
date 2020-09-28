import React from 'react';

//Class Constant
const section = 'text-gray-500 bg-gray-900 body-font'
const sectionContainer = 'container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'
const introSection = 'lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'
const githubButton = 'inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
const facebookButton = 'ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
const Hero = (props) => {
  const { images, title } = props
  return (
    <section className={section}>
      <div className={sectionContainer}>
        <div className={introSection}>
          <h1 data-aos="fade-down" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{title}</h1>
          <p data-aos="slide-left" className="mb-8 leading-relaxed">{props.children}</p>
          <div data-aos="slide-left" className="flex justify-center">
            <a href="https://www.github.com/hananloser" className={githubButton}>
              <img className="w-5 h-5 mr-2 mt-1" src="https://img.icons8.com/color/48/000000/github-2.png" alt="github" />
              Github
            </a>
            <a href="https://www.facebook.com/hananloser" className={facebookButton}>
              <img className="w-5 h-5 mr-2 mt-1" src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt="" />
              Facebook
              </a>
          </div>
        </div>
        <div data-aos='flip-right' className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-md shadow-lg" alt="hero" src={images} />
        </div>
      </div>
    </section>
  );
}

export default Hero;