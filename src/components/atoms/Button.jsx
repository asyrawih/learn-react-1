import React from 'react'

const Button = ({ children , ...props }) => {
  return (
    <button className="bg-blue-700 p-3 rounded shadow-sm text-sm text-white font-bold focus:outline-none hover:bg-blue-500">
      {children}
    </button>
  )
}

export default Button