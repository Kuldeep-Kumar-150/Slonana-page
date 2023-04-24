import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cartoonImg from '../assets/img/png/cartoon-man.png'
import anyBodies from '../assets/img/svg/anybodies.svg'
import sticker1 from '../assets/img/svg/sticker-1.svg'
import sticker2 from '../assets/img/svg/sticker-2.svg'
import sticker3 from '../assets/img/svg/sticker-3.svg'
import sticker4 from '../assets/img/svg/sticker-4.svg'
const Growth = () => {
    return (
        <section className='bg-black growth_section mt-5 mb-5'>
            <Container className='custom_container'>
                <div className="d-flex flex-column align-items-lg-center justify-content-between flex-lg-row">
                    <p className='fs_2xl fw-normal text-white ff_helvetica'>Build for growth.</p>
                    <ul className='d-flex align-items-center justify-content-between justify-content-sm-start p-0 m-0 gap-3 gap-sm-4'>
                        <li><a className='text-white fs_3sm fw-normal ff_helvetica' href="#">NFTs</a></li>
                        <li><a className='text-white fs_4xsm fw-normal ff_helvetica' href="#">DeFi</a></li>
                        <li><a className='text-white fs_3sm fw-normal ff_helvetica' href="#">Payments</a></li>
                        <li><a className='text-white fs_3sm fw-normal ff_helvetica' href="#">Gaming</a></li>
                        <li><a className='text-white fs_4xsm fw-normal ff_helvetica' href="#">DAOs</a></li>
                    </ul>
                </div>
                <Row className='align-items-center bg_lightblack rounded-3 mt-5'>
                    <Col md={6} className='p-0' data-aos="zoom-in-up"><img className='w-100' src={cartoonImg} alt="cartoonImg" /></Col>
                    <Col md={6} className='ps-md-4 ps-lg-5 mt-5 mt-md-0 pb-md-0 pb-5' data-aos="zoom-in-down">
                        <img width={240} height={52} src={anyBodies} alt="anyBodies" />
                        <p className='text-white ff_helvetica fw-normal fs_md mb-0 pt-2 mt-1'>It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.</p>
                        <a href="#" className='text_darkblue fs_4sm fw-normal ff_helvetica pt-2 mt-1 d-inline-block'>Learn more about</a>
                        <a href="#" className='text_darkblue fs_4sm fw-normal ff_helvetica ms-3'>NFTson Solana</a>
                    </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-between justify-content-sm-around pt-4 mt-2">
                    <img width={100} height={30} src={sticker1} alt="sticker1" />
                    <img width={39} height={46} src={sticker2} alt="sticker2" />
                    <img width={46} height={46} src={sticker3} alt="sticker3" />
                    <img width={100} height={30} src={sticker4} alt="sticker4" />
                </div>
            </Container>
        </section>
    )
}

export default Growth