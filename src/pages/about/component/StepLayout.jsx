import React from 'react'

const StepLayout = ({ children , title }) => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="flex justify-center">
        <span className="text-2xl">{title}</span>
      </div>
      <div className="container px-2 py-24 mx-auto flex flex-wrap">
        {children}
      </div>
    </section>
  )
}
export default StepLayout