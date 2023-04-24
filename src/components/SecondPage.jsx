import React from 'react'
import MyHeader2 from './MyHeader2'
import MyNav from './MyNav'
import GetStarted from './GetStarted'
import DigDipper from './DigDipper'
import Source from './Source'
import Footer from './Footer'

const SecondPage = () => {
  return (
    <>
      <div className='vh_lg_100 d-flex flex-column'>
        <MyNav />
        <MyHeader2 />
      </div>
      <GetStarted />
      <DigDipper />
      <Source />
      <Footer/>
    </>
  )
}

export default SecondPage