import React from 'react'
import MediumCell from './MediumCell'

const MiddleSection = () => {
  return (
    <div className='w-6xl'>
      <div className='h-12 border-b border-neutral-200'></div>
      <div className='flex flex-col gap-4 px-4 py-4'>
        <MediumCell/>
        <MediumCell/>
        <MediumCell/>
      </div>
    </div>
  )
}

export default MiddleSection
