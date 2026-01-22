import React from 'react'
import Header from '../../components/KanbanBoard/header'
import Cont from '../../components/KanbanBoard/Cont'

const KanbanBoard = () => {
  return (
    <div className='min-h-screen flex flex-col border-2' >
      <Header/>
      <div className='flex-grow flex gap-4 py-5 px-7'>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
      </div>
    </div>
  )
}

export default KanbanBoard
