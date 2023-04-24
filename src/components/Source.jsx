import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import arrow from '../assets/img/svg/arrow_img.svg'
import changeLog from '../assets/img/png/change_log.png'
import youTube from '../assets/img/svg/youtube.svg'
import podCast from '../assets/img/svg/Podcast_icon.svg'
const Source = () => {
    return (
        <section className='bg_lightgrey py-2 py-sm-5 mt-sm-5'>
            <Container className='custom_container my-5'>
                <h4 className='text-white ff_helvetica fw-normal fs_3lg'>Go to the source.</h4>
                <p className='text_grey ff_helvetica fw-normal fs_4sm'>Read the documentation for Solana and popular tools.</p>
                <Row className='mt-5'>
                    <Col lg={6} className='p-4'>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className='text-white ff_helvetica fw-normal fs_lg'>Solana Docs</h2>
                            <a href="#" className='view_all_btn border border-1 border-white rounded-5 fw-normal ff_helvetica text-white fs_3xsm'>View all <img className='ps-3' src={arrow} alt="arrow-img" /></a>
                        </div>
                        <div className='horizontel_line'></div>
                        <p className='fw-normal text-white ff_helvetica fs_4sm'>Learn how Solana works and get a high-level understanding of Solana's architecture.</p>
                    </Col>
                    <Col lg={6} className='p-4'>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className='text-white ff_helvetica fw-normal fs_lg'>Metaplex Docs</h2>
                            <a href="#" className='view_all_btn border border-1 border-white rounded-5 fw-normal ff_helvetica text-white fs_3xsm'>View all <img className='ps-3' src={arrow} alt="arrow-img" /></a>
                        </div>
                        <div className='horizontel_line'></div>
                        <p className='fw-normal text-white ff_helvetica fs_4sm'>Learn what you build with Metaplex, make the process of creating and launching NFTs easier.</p>
                    </Col>
                </Row>
                <Row className='py-4 py-sm-5 mt-sm-5 flex-column-reverse flex-lg-row'>
                    <Col lg={6}>
                        <p className='text-white ff_helvetica fw-normal fs_2xl mb-0 mb-lg-3 pb-3 pt-3 pt-lg-0'>Solana Changelog</p>
                        <p className='fw-normal text-white ff_helvetica fs_4sm'>Some more Solana changes from Jacob & Joe. Subscribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Priced Compute Units: ...</p>
                        <a href="#" className='ff_roboto text-white fw-normal fs_3xsm latest_ep_btn'>Latest episode</a>
                    </Col>
                    <Col lg={6}>
                        <img className='w-100' src={changeLog} alt="changeLog" />
                    </Col>
                </Row>
                <Row className='mt-4 mt-lg-5'>
                    <Col lg={6}>
                        <div className="developer_cards p-3 p-sm-4 h-100">
                            <div>
                                <h3 className='fs_3lg text-white fw-normal ff_helvetica'>Solana Developer Update</h3>
                                <p className='text_grey fw-normal ff_helvetica fs_sm mt-3 mt-sm-4 pt-sm-1 mb-0'>Sign up to the newsletter and learn about new resources, new commits, new proposals, <span className='d-lg-block'>and more.</span></p>
                            </div>
                            <div className='mt-sm-3 pt-4 pt-sm-5'>
                                <div className='bg-black d-flex justify-content-between rounded-5 py-2 px-2'>
                                    <input className='bg-black w-75 pe-3 rounded-5 ps-2 fs_3xsm fw-semibold ff_roboto text_dark' type="text" placeholder='Email' />
                                    <button className='text-uppercase signup_btn rounded-5 fs_3xsm fw-normal ff_roboto text-nowrap'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="developer_cards p-3 p-sm-4 h-100 mt-4 mt-lg-0">
                            <div>
                                <h3 className='fs_2lg text-white fw-normal ff_helvetica'>Even more resources</h3>
                                <p className='text_grey fw-normal ff_helvetica fs_2sm mt-3 mt-sm-4 pt-sm-1 mb-0'>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</p>
                            </div>
                            <div className="pt-5">
                                <a className='d-block d-sm-inline-block me-sm-2 text-center border border-1 rounded-5 podcast_btn fs_3xsm fw-normal ff_roboto text-white text-uppercase' href="#">YouTube <svg className='ms-2' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1479_1507)">
                                        <path d="M25.6175 3.84946C25.3334 2.78344 24.4966 1.94401 23.4337 1.65912C21.5076 1.14136 13.7836 1.14136 13.7836 1.14136C13.7836 1.14136 6.05969 1.14136 4.13346 1.65912C3.07076 1.94401 2.23376 2.78344 1.94973 3.84946C1.43359 5.78151 1.43359 9.81259 1.43359 9.81259C1.43359 9.81259 1.43359 13.8437 1.94973 15.7759C2.23376 16.8418 3.07076 17.6812 4.13346 17.9662C6.05969 18.4839 13.7836 18.4839 13.7836 18.4839C13.7836 18.4839 21.5076 18.4839 23.4337 17.9662C24.4966 17.6812 25.3334 16.8418 25.6175 15.7759C26.1336 13.8437 26.1336 9.81259 26.1336 9.81259C26.1336 9.81259 26.1336 5.78151 25.6175 3.84946Z" fill="#ED1D24" />
                                        <path d="M11.2559 13.4726L17.7116 9.81279L11.2559 6.15265V13.4726Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1479_1507">
                                            <rect width="26" height="19" fill="white" transform="translate(0.783203 0.3125)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                                <a className='d-block d-sm-inline-block ms-sm-2 text-center mt-3 border border-1 rounded-5 podcast_btn fs_3xsm fw-normal ff_roboto text-white text-uppercase' href="#">Podcast <img className='ms-2' height={20} width={27} src={podCast} alt="Podcast" /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Source