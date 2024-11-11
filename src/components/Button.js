import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="m-2 px-4 bg-gray-100">{name}</button>
    </div>
  )
}

export default Button