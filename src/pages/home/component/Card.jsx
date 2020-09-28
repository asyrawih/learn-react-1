// /* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Card = ({ title, children , logo }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <img className="mx-auto w-20" src={logo} alt="logo" />
        {children}
        <h2 className="title-font font-medium text-3xl text-white">{title}</h2>
      </div>
    </div>
  )
}
export default Card 
