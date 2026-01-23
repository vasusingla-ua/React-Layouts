import React from 'react'

const LayoutNavbar = ({onChange, active}) => {
  return (
    <div className='w-full bg-white border-b'>
      <div className={`py-3 px-3 mx-auto max-w-3xl flex gap-3 `}>
        <button onClick={()=>onChange("DataTable")}
        className={` py-1 px-3 rounded-2xl ${active=="DataTable"? "bg-black text-white":"bg-gray-100"}`}>Data Table</button>
        <button onClick={()=>onChange("KanbanBoard")} 
        className={` py-1 px-3 rounded-2xl ${active=="KanbanBoard"? "bg-black text-white":"bg-gray-100"}`}>Kanban Board</button>
        <button onClick={()=>onChange("ColumnFeed")} 
        className={` py-1 px-3 rounded-2xl ${active=="ColumnFeed"? "bg-black text-white":"bg-gray-100"}`}>3-Column-Feed</button>
      </div>
    </div>
  )
}

export default LayoutNavbar
