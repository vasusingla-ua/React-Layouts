import React from 'react'

const DataTableFooter = () => {
  return (
    <div className='mt-auto border-t border-neutral-200 h-12 bottom-0 py-3 px-3 flex'>
      <div className='h-7 w-36 bg-neutral-200'></div>
      <div className='ml-auto px-3 gap-3 flex'>
        <div className='h-7 w-7 bg-neutral-100 rounded'></div>
        <div className='h-7 w-7 bg-neutral-200 rounded' ></div>
        <div className='h-7 w-7 bg-neutral-100 rounded'></div>
        <div className='h-7 w-7 bg-neutral-100 rounded'></div>
        <div className='h-7 w-7 bg-neutral-100 rounded' ></div>
      </div>
    </div>
  )
}

export default DataTableFooter
