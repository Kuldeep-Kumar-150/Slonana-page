import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Community = () => {
    return (
        <section className='community_section_bgimage mt-5 overflow-hidden'>
            <Container className='custom_container'>
                <Row>
                    <Col lg={6} data-aos="fade-right">
                        <p className='fs_xl ff_helvetica fw-normal text-white mb-0 pt-3 pt-lg-5 mt-lg-4'>Join a community <span className='d-lg-block'>of millions.</span></p>
                    </Col>
                    <Col lg={6} data-aos="fade-left">
                        <h3 className='colorfull_text ff_helvetica fs_8xl fw-normal mb-0 mt-4 mt-lg-0'>11.5M+</h3>
                        <p className='fs_4xsm fw-normal text_grey text-uppercase ms-1'>Active accounts</p>
                        <h4 className='colorful_text_2 fs_9xl ff_helvetica fw-normal mt-4 pt-3 mb-0'>21.9M</h4>
                        <p className='fs_4xsm fw-normal text_grey text-uppercase ms-1'>NFTs minted</p>
                        <h5 className='colorful_text_3 fs_10xl ff_helvetica fw-normal mb-0 mt-4 pt-3'>$0.00025</h5>
                        <p className='fs_4xsm fw-normal text_grey text-uppercase ms-1'>Average cost per transaction</p>
                    </Col>
                </Row>
                <Row className='py-sm-5 mt-md-5'>
                    <Col lg={4} className='mt-5' data-aos="fade-up-right">
                        <h5 className='fs_xl fw-normal ff_helvetica text-white mt-md-3'>Made for <span className='d-lg-block'>mass adoption</span></h5>
                        <p className='text-uppercase text_grey fs_4xsm fw-normal ff_roboto position-relative numbering_dot ms-2'>Live data</p>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={6} className='mt-sm-0 mt-lg-4' data-aos="fade-up-left">
                                <div className='mt-sm-5 cards_shadow p-4 p-md-5 mt-4'>
                                    <h6 className='text-white fs_4md fw-normal ff_helvetica fast_heading position-relative ps-3'>Fast</h6>
                                    <p className='text_grey fs_sm fw-normal ff_helvetica mt-2 mb-0'>Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.</p>
                                    <p className='fs_4md fw-normal ff_helvetica text-white mb-0 position-relative numbering_dot mt-2 mt-sm-4'>3,969</p>
                                    <p className='text_grey fs_4xsm fw-normal ff_roboto mt-2 pt-1 mb-0'>Transactions per second</p>
                                </div>
                            </Col>
                            <Col lg={6} data-aos="fade-down-right">
                                <div className='cards_shadow p-4 p-md-5 mt-4'>
                                    <h6 className='text-white fs_4md fw-normal ff_helvetica Decentralized_heading position-relative ps-3'>Decentralized</h6>
                                    <p className='text_grey fs_2sm fw-normal ff_helvetica mt-2 mb-0'>The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.</p>
                                    <p className='text-white fs_2md ff_helvetica fw-normal mb-0 position-relative numbering_dot mt-2 mt-sm-4'>1,675</p>
                                    <p className='text_grey fs_4xsm fw-normal ff_roboto mt-2 pt-1 mb-0'>Validator nodes</p>
                                </div>
                            </Col>
                            <Col lg={6} className='mt-lg-4' data-aos="fade-down-left">
                                <div className='cards_shadow p-4 p-md-5 mt-lg-5 mt-4'>
                                    <h6 className='text-white fs_4md fw-normal ff_helvetica Scalable_heading position-relative ps-3'>Scalable</h6>
                                    <p className='text_grey fs_2sm fw-normal ff_helvetica mt-2 mb-0'>Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.</p>
                                    <p className='text-white fw-normal ff_helvetica fs_3md mb-0 position-relative numbering_dot mt-2 mt-sm-4'>163,077,581,394</p>
                                    <p className='text_grey fs_4xsm fw-normal ff_roboto mt-2 pt-1 mb-0'>Total transactions</p>
                                </div>
                            </Col>
                            <Col lg={6} data-aos="fade-right">
                                <div className='cards_shadow p-4 p-md-5 mt-4'>
                                    <h6 className='text-white fs_4md fw-normal ff_helvetica Energy_heading position-relative ps-3'>Energy Efficient</h6>
                                    <p className='text_grey fs_2sm fw-normal ff_helvetica mt-2 mb-0'>Solana’s proof of stake network and other innovations minimize its impact on the <span className='text-success text-decoration-underline'>environment.</span> Each Solana transaction uses about the same energy as a few Google searches.</p>
                                    <p className='text-white fw-normal ff_helvetica fs_3md mb-0 mt-2 mt-sm-4'>0%</p>
                                    <p className='text_grey fs_4xsm fw-normal ff_roboto mt-2 pt-1 mb-0'>Net carbon impact</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Community