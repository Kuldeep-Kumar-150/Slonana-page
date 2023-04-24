import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mycards from './js/Cards'
import Slider from 'react-slick'

const DigDipper = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9000,
                settings: "unslick"
            },
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
        <section className='py-5 mt-4'>
            <Container className='custom_container'>
                <h4 className='text-white ff_helvetica fw-normal fs_4xl'>Dig deeper.</h4>
                <p className='text_grey ff_helvetica fw-normal fs_4sm'>Learn from resources across the greater Solana ecosystem.</p>
                <Slider {...settings} className='row'>
                    {/* <div > */}
                    {mycards.map((cards) => {
                        return (
                            <Col sm={4} className='my-2 pe-0'>
                                <div className="bg_lightdark overflow-hidden dig_deeper_cards position-relative mx-1 p-4 rounded-3 slider_cards_height d-lg-flex flex-column justify-content-between">
                                    <div>
                                        <p className='mb-1 text_primart text-uppercase fs_2xsm fw-normal ff_helvetica'>{cards.paraOne}</p>
                                        <h4 className='mb-3 mt-2 text-white fw-normal ff_helvetica fs_3sm'>{cards.heading}</h4>
                                        <p className='fs_4xsm fw-normal text-white ff_helvetica'>{cards.paraTwo}</p>
                                    </div>
                                    <div className="d-flex align-items-center mt-3 crusor_pointer">
                                        <a className='fs_xsm text-white fw-normal ff_helvetica text-uppercase' href="#">{cards.btn}</a>
                                        <img height={17} width={17} src={cards.img} alt="img" />
                                    </div>
                                </div>
                            </Col>
                        )
                    }).slice(0, 8)}
                    {/* </div> */}
                </Slider>
            </Container>
        </section>
    )
}

export default DigDipper