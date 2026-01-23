import React from 'react'

const SmallCell = ({variant="default"}) => {
  const variants={
    default:"bg-neutral-100",
    grey:"bg-neutral-200",
    black:"bg-black"
  }
  return (
    <div className={`w-full h-12 rounded ${variants[variant]}`}>
      
    </div>
  )
}
 
export default SmallCell
