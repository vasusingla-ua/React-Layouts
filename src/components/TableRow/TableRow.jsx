import React from 'react'

const TableRow = ({bg}) => {
  return (
    <div>
      <div className={`flex items-center gap-6 ${bg=="gray"?"bg-neutral-50": "bg-white"} py-3 px-3 hover:bg-neutral-50 border-b border-neutral-200`} >
        <div className='w-24 h-5 bg-neutral-200 rounded '></div>
        <div className='w-56 h-5 bg-neutral-100  rounded'></div>
        <div className='w-40 h-5 bg-neutral-100  rounded'></div>
        <div className='w-36 h-5 bg-neutral-100  rounded'></div>
        <div className='w-36 h-5 bg-neutral-100  rounded'></div>
        <div className='w-32 h-5 bg-neutral-200  rounded'></div>
        {/* <div className='w-5 h-3 bg-neutral-200 '></div> */}
        <div className='flex justify-center gap-3 ml-auto mr-5'>
             <div className='w-5 h-5 bg-neutral-200  rounded'></div>
             <div className='w-5 h-5 bg-neutral-200 rounded'></div>
        </div>
      </div>
    </div>
  )
}

export default TableRow
