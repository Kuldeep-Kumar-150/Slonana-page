import React from 'react'
import { Container } from 'react-bootstrap'
import image2 from '../assets/img/png/grid-img-2.png'
import image3 from '../assets/img/png/grid-img-3.png'
import image4 from '../assets/img/png/grid-img-4.png'
import image6 from '../assets/img/png/grid-img-6.png'
import image8 from '../assets/img/png/grid-img-8.png'
import Marquee from 'react-fast-marquee'
const Join = () => {
  return (
    <section className='py-5 mt-5 overflow-hidden'>
      <Container className='position-relative'>
        <div className="grid_section_bgimg position-absolute">
          <h4 className='text-white fw-normal ff_helvetica fs_xl'>Join a thriving community.</h4>
        </div>
      </Container>
      <Marquee speed={100} className='mt-5 pt-5 overflow-hidden'>
        <div className='d-grid grid_class gap-3'>
          <div className='grid_img_1 d-flex align-items-center justify-content-center flex-column'>
            <p className='text_pink fs_4lg fw-normal ff_helvetica mb-0'>11,000</p>
            <p className='text_grey fw-normal ff_helvetica fs_2xsm'>Solana Hacker House participants</p>
          </div>
          <div className='grid_img_2'><img className='w-100 h-100' src={image2} alt="images" /></div>
          <div className='grid_img_3'><img className='w-100 h-100' src={image3} alt="images" /></div>
          <div className='grid_img_4'><img className='w-100 h-100' src={image4} alt="images" /></div>
          <div className='grid_img_5 d-flex align-items-center justify-content-center flex-column'>
            <p className='text_green fw-normal ff_helvetica fs_4xl'>48,000</p>
            <p className='text_grey fw-normal ff_helvetica fs_2xsm'>Developers building during Solana Hackathons</p>
          </div>
          <div className='grid_img_6'><img className='w-100 h-100' src={image6} alt="images" /></div>
          <div className='grid_img_7 d-flex align-items-center justify-content-center flex-column me-3'>
            <p className='text_yellow fw-normal ff_helvetica fs_4xl'>3,800</p>
            <p className='text_grey fw-normal ff_helvetica fs_2xsm'>Solana Breakpoint 2022 attendees</p>
          </div>
          <div className='grid_img_8 me-3'><img className='w-100 h-100' src={image8} alt="images" /></div>
        </div>
      </Marquee>
      <Container className='text-center pt-5 py-lg-5 my-sm-5'>
        <h5 className='text-white fw-normal ff_helvetica fs_xl text-center'>It's time to join the thousands of creators, <span className='d-lg-block'>artists, and developers using Solana.</span></h5>
        <a href="#" className=' d-inline-block text-uppercase text-white ff_roboto fw-normal fs_3xsm start_building_btn'>Start building</a>
      </Container>
    </section>
  )
}

export default Join