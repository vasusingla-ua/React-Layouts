import React from 'react'

const DataTableHeader = () => {
  return (
    <div className='h-12 border-b border-neutral-200 gap-6 items-center flex px-5 '>
      <div className='h-7 w-48 bg-neutral-200'></div>
      <div className='ml-auto flex gap-5'>
        <div className='h-7 w-28 bg-neutral-100 '></div>
        <div className='h-7 w-28 bg-black '></div>
      </div>
    </div>
  )
}

export default DataTableHeader
