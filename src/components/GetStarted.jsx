import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import arrow from '../assets/img/svg/right_arrow.svg'
import cardImg1 from '../assets/img/png/card_img_1.png'
import cardImg2 from '../assets/img/png/card_img_2.png'
import cardImg3 from '../assets/img/png/card_img_3.png'
import cardImg4 from '../assets/img/png/card_img_4.png'
import cardImg5 from '../assets/img/png/card_img_5.png'
import cardImg6 from '../assets/img/png/card_img_6.png'
import Slider from 'react-slick'
const GetStarted = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='py-5 mt-2'>
            <Container className='custom_container'>
                <p className='fs_xl fw-normal ff_helvetica text-white'>Get started.</p>
                <p className='text_grey fw-normal ff_helvetica fs_4sm'>Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
                <div className='rounded-3 get_started_img d-flex flex-column justify-content-center ps-lg-5'>
                    <div><button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>17 Chapters</button></div>
                    <h4 className='text-white ff_helvetica fw-normal fs_2xl mt-3 mb-0'>Solana Development Course</h4>
                    <p className='text-white fw-normal ff_helvetica fs_2sm mt-4 pt-sm-2 mb-4'>Quickstart your Solana development starting <span className='d-lg-block'>from nothing to complex programs.</span></p>
                    <a href="#"><img height={40} widthimage={40} src={arrow} alt="arrow" /></a>
                </div>
                {/* <Row className='mt-4'> */}
                <Slider {...settings} className='mt-4'>
                    <Col sm={4}>
                        <div className="position-relative mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg1} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>17 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Buildspace</p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="position-relative mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg2} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>12 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Solana Bytes</p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="position-relative mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg3} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>1 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Scaffold Series</p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                </Slider>
                <Slider {...settings}>
                    <Col sm={4}>
                        <div className="position-relative mt-3 mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg4} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>3 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Freecodecamp Solana <span className='d-block'>Course</span></p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="position-relative mt-3 mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg5} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>167 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Solana Development <span className='d-block'>by Knox</span></p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="position-relative mt-3 mx-2 overflow-hidden">
                            <img className='w-100 cards_img' src={cardImg6} alt="images" />
                            <div className='position_card_1'>
                                <button className='fs_xsm fw-normal text-white ff_helvetica px-3 rounded-5 border-0 bg_primary'>8 Chapters</button>
                                <p className='mb-0 text-white fw-normal ff_helvetica fs_2sm mt-2'>Solana Bootcamp</p>
                            </div>
                            <img className='cards_arrow crusor_pointer' height={40} widthimage={40} src={arrow} alt="image" />
                        </div>
                    </Col>
                </Slider>
                {/* </Row> */}
            </Container>
        </section>
    )
}

export default GetStarted