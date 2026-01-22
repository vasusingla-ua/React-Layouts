import React, { useState } from 'react'
import LayoutNavbar from '../components/LayoutNavbar/LayoutNavbar'
import DataTable from '../layouts/DataTable/DataTable';
import KanbanBoard from '../layouts/KanbanBoard/KanbanBoard';

const Homepage = () => {
    const [layout, setLayout]=useState("home");
  return (
    <div className='min-h-screen flex flex-col'>
        <LayoutNavbar onChange={setLayout}/>
      {/* {layout=="home" && <LayoutNavbar/>} */}
       <div className=" h-0 ">
      {layout=="DataTable" && <DataTable/>}
      {layout=="KanbanBoard" && <KanbanBoard/>}
</div>
    </div>
  )
}

export default Homepage
