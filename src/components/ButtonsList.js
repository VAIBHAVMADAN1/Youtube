import React from 'react'
import Button from './Button'

const buttonsList = ["Music", "Cricket", "Comedy", "Live", "Gaming", "Podcast", "Cooking"];

const ButtonsList = () => {
  return (
    <div className="flex">
      {buttonsList.map(button => <Button name={button}/>)}
    </div>
  )
}

export default ButtonsList