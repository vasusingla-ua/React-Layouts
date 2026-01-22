import React from 'react'

const LayoutNavbar = ({onChange}) => {
  return (
    <div className='w-full bg-white border-b'>
      <div className='py-3 px-3 mx-auto max-w-3xl border-b flex gap-3'>
        <button onClick={()=>onChange("DataTable")}
        className='bg-gray-100 py-1 px-3 rounded-2xl'>Data Table</button>
        <button onClick={()=>onChange("KanbanBoard")} 
        className='bg-gray-100 py-1 px-3 rounded-2xl'>Kanban Board</button>
      </div>
    </div>
  )
}

export default LayoutNavbar
