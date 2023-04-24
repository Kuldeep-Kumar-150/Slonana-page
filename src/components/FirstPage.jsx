import React from 'react'
import MyNav from './MyNav'
import MyHeader from './MyHeader'
import Community from './Community'
import Growth from './Growth'
import Join from './Join'
import Footer from './Footer'


const FirstPage = () => {
    return (
        <>
            <div className='bg_header_img vh_lg_100 d-flex flex-column'>
                <MyNav />
                <MyHeader />
            </div>
            <Community />
            <Growth />
            <Join />
            <Footer />
        </>
    )
}

export default FirstPage