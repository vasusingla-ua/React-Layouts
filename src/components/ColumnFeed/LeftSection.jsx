import React from 'react'
import SmallCell from './SmallCell'

const LeftSection = () => {
  return (
    <div className='w-60 flex flex-col border-r border-neutral-200 px-2 py-2'>
      <div className=' flex flex-col gap-2'>
      <SmallCell/>
      <SmallCell/>
      <SmallCell/>
      <SmallCell/>
      <SmallCell/>
      </div>
      <div className='mt-auto'>
        <SmallCell variant="black" />
      </div>
    </div>
  )
}

export default LeftSection
