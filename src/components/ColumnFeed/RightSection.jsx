import React from 'react'
import MediumCell from './MediumCell'

const RightSection = () => {
  return (
    <div className='border-l border-neutral-200 py-3 px-3 flex flex-col gap-4'>
      <div className='h-12 w-76 rounded-2xl bg-neutral-100'> </div>
      <MediumCell/>
      <MediumCell/>
    </div>
  )
}

export default RightSection
