import React, { useState } from 'react'
import LayoutNavbar from '../components/LayoutNavbar/LayoutNavbar'
import DataTable from '../layouts/DataTable/DataTable';
import KanbanBoard from '../layouts/KanbanBoard/KanbanBoard';
import ColumnFeed from '../layouts/3-column-feed/ColumnFeed';

const Homepage = () => {
    const [layout, setLayout]=useState("home");
  return (
    <div className='min-h-screen flex flex-col'>
        <LayoutNavbar active ={layout} onChange={setLayout}/>
      {/* {layout=="home" && <LayoutNavbar/>} */}
       <div className=" h-0 ">
      {layout=="DataTable" && <DataTable/>}
      {layout=="KanbanBoard" && <KanbanBoard/>}
      {layout=="ColumnFeed" && <ColumnFeed/>}
</div>
    </div>
  )
}

export default Homepage
