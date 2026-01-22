import React from 'react'

const Header = () => {
  return (
    <div className='h-14  flex justify-between items-center px-3 py-3 border-b border-neutral-100'>
      <div className='h-6 w-60 bg-neutral-200 rounded'></div>
      <div className='h-10 flex items-center gap-3'>
        <div className='flex -space-x-2'>
        <div className='h-7 w-7 rounded-full bg-neutral-300 border-2 border-white'> </div>
        <div className='h-7 w-7 rounded-full bg-neutral-300 border-2 border-white'> </div>
        <div className='h-7 w-7 rounded-full bg-neutral-300 border-2 border-white'> </div>
        <div className='h-7 w-7 rounded-full bg-neutral-300 border-2 border-white'> </div>
        </div>
        <div className='h-7 w-20 bg-neutral-200'></div>
      </div>
    </div>
  )
}

export default Header
