import React from 'react'
import LayoutNavbar from '../../components/LayoutNavbar/LayoutNavbar'
import Table from '../../components/Table/Table'
import DataTableMiddle from '../../components/DataTableMiddle'
import DataTableHeader from '../../components/DataTableHeader'
import DataTableFooter from '../../components/DataTableFooter'

const DataTable = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* <LayoutNavbar/> */}
      <DataTableHeader/>
      <DataTableMiddle/>
      <Table/>
      <DataTableFooter/>
    </div>
  )
}

export default DataTable
