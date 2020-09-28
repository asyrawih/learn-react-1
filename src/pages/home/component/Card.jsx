import React from 'react'

const Card = ({ title, children }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        {children}
        <h2 className="title-font font-medium text-3xl text-white">46</h2>
        <p className="leading-relaxed">{title}</p>
      </div>
    </div>
  )
}
export default Card 
