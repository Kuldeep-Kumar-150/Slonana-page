import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/png/2nd_header_img.png'


const MyHeader2 = () => {
    return (
        <section className='overflow-hidden d-flex flex-column align-items-center justify-content-center flex-grow-1'>
            <Container className='custom_container'>
                <Row className='flex-column-reverse flex-lg-row align-items-center'>
                    <Col lg={6} data-aos="fade-right">
                        <h2 className='fs_7xl text-white ff_helvetica fw-normal'>Developer <span className='d-lg-block'>Resources</span></h2>
                        <p className='text_grey fs_md fw-normal ff_helvetica mt-3 pt-1'>A manual for joining the Solana <span className='d-lg-block'>ecosystem. By builders for builders.</span></p>
                        <a href="#" className='d-inline-block build_now_btn fs_3xsm fw-normal ff_roboto text-black text-uppercase'>Build Now</a>
                        <a href="#" className='d-inline-block ms-1 ms-sm-2 stack_exchange_btn text-white fs_3xsm fw-normal ff_roboto text-uppercase'>Stack Exchange <svg className='ms-1' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z" fill="#848895" />
                        </svg>
                        </a>
                    </Col>
                    <Col lg={6} className='position-relative' data-aos="fade-left">
                        <div className="header_position_box d-none d-lg-flex"></div>
                        <img className='w-100 z_index_21' src={headerImg} alt="v" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyHeader2