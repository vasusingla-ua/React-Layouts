import React from 'react'
import Card from './Card'

const Cont = () => {
  return (
    <div className='w-68 border-b-blue-950 bg-neutral-200 py-1 px-3 flex flex-col gap-2 rounded' >
        <div className='h-7 flex justify-between items-center px-1 py-3 mb-2' >
            <div className='w-28 h-5 bg-neutral-500 rounded'></div>
            <div className='w-8 h-5 bg-neutral-500 rounded'></div>
        </div>
      <Card/>
      <Card/>
      <Card/>
    <div className='h-7 w-full bg-neutral-300 mt-auto mb-2 rounded'></div>
    </div>
  )
}

export default Cont
