import React from 'react'

const Card = () => {
  return (
    <div className='h-24 bg-white flex flex-col items-start py-3 px-3 rounded gap-1.5'>
      <div className='w-56 h-5 bg-neutral-200 rounded'></div>
      <div className='w-48 h-5 bg-neutral-100 rounded'></div>
      <div className='h-8 w-full flex justify-between items-center' >
        <div className='h-4 w-12 bg-neutral-200 rounded'></div>
        <div className='h-7 w-7 bg-neutral-200 rounded-full'></div>
      </div>
    </div>
  )
}

export default Card
