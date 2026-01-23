import React from 'react'
import LeftSection from '../../components/ColumnFeed/LeftSection'
import MiddleSection from '../../components/ColumnFeed/MiddleSection'
import RightSection from '../../components/ColumnFeed/RightSection'


const ColumnFeed = () => {
  return (
    <div className='flex min-h-screen'>
      <LeftSection/>
      <MiddleSection/>
      <RightSection/>
    </div>
  )
}

export default ColumnFeed
