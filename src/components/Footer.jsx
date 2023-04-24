import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerLogo from '../assets/img/svg/footer_logo.svg'
import youtube from '../assets/img/svg/youtube.svg'
import twitter from '../assets/img/svg/twitter.svg'
import discord from '../assets/img/svg/discord_2.svg'
import icon from '../assets/img/svg/discord_3.svg'
import github from '../assets/img/svg/github.svg'
import telegram from '../assets/img/svg/telegram.svg'
const Footer = () => {
    return (
        <footer className='py-5'>
            <Container className='custom_container'>
                <Row>
                    <Col md={7}>
                        <img className='crusor_pointer' src={footerLogo} alt="footerLogo" />
                        <p className='fs_4xsm text-white fw-normal ff_roboto mt-4'>Managed by Solana Foundation</p>
                        <div className="d-flex mt-2 mt-sm-4">
                            <a href="#https://www.youtube.com/" className='footer_icons_box d-flex align-items-center justify-content-center me-2'><img src={youtube} alt="youtube" /></a>
                            <a href="#" className='footer_icons_box d-flex align-items-center justify-content-center mx-2'><img src={twitter} alt="twitter" /></a>
                            <a href="#" className='footer_icons_box d-flex align-items-center justify-content-center mx-2'><img src={discord} alt="discord" /></a>
                            <a href="#" className='footer_icons_box d-flex align-items-center justify-content-center mx-2'><img src={icon} alt="icon" /></a>
                            <a href="#" className='footer_icons_box d-flex align-items-center justify-content-center mx-2'><img src={github} alt="github" /></a>
                            <a href="#" className='footer_icons_box d-flex align-items-center justify-content-center ms-2'><img src={telegram} alt="telegram" /></a>
                        </div>
                        <a href="#" className='text_grey fs_4xsm fw-normal ff_helvetica mt-2 mt-sm-4 pt-2 d-block'>© 2023 Solana Foundation. All rights reserved.</a>
                    </Col>
                    <Col md={5}>
                        <Row className='align-items-start'>
                            <Col xs={6} sm={5}>
                                <ul className='mt-4 p-0 mt-md-0'>
                                    <li className='fs_4xsm fw-normal text-white ff_helvetica mb-1'>Solana</li>
                                    <li className="mt_13"><a href="#">Grants</a></li>
                                    <li className='mt_11'><a href="#">Break Solana</a></li>
                                    <li className='mt_11'><a href="#">Media Kit</a></li>
                                    <li className='mt_11'><a href="#">Careers</a></li>
                                    <li className='mt_11'><a href="#">Disclaimer</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={5}>
                                <ul className='mt-4 p-0 mt-md-0'>
                                    <li className='fs_4xsm fw-normal text-white ff_helvetica'>Get Connected</li>
                                    <li className='mt_13'><a href="#">Ecosystem</a></li>
                                    <li className='mt_11'><a href="#">Blog</a></li>
                                    <li className='mt_11'><a href="#">Newsletter</a></li>
                                </ul>
                            </Col>
                            <Col sm={2} className='mt-sm-4 mt-md-0'>
                                <a href='#' className='text-uppercase mb-0 text_grey fs_3xsm fw-normal ff_helvetica'>
                                    <svg className='me-2' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8901 6.25C12.3347 2.76172 11.0246 0.3125 9.5 0.3125C7.9754 0.3125 6.66532 2.76172 6.10988 6.25H12.8901ZM5.82258 10C5.82258 10.8672 5.86855 11.6992 5.94899 12.5H13.0472C13.1276 11.6992 13.1736 10.8672 13.1736 10C13.1736 9.13281 13.1276 8.30078 13.0472 7.5H5.94899C5.86855 8.30078 5.82258 9.13281 5.82258 10ZM18.2607 6.25C17.1651 3.59766 14.9472 1.54688 12.2083 0.71875C13.1429 2.03906 13.7865 4.02734 14.1236 6.25H18.2607ZM6.7879 0.71875C4.05282 1.54688 1.83105 3.59766 0.739314 6.25H4.87641C5.20968 4.02734 5.85323 2.03906 6.7879 0.71875ZM18.6706 7.5H14.2768C14.3573 8.32031 14.4032 9.16016 14.4032 10C14.4032 10.8398 14.3573 11.6797 14.2768 12.5H18.6667C18.8774 11.6992 18.9962 10.8672 18.9962 10C18.9962 9.13281 18.8774 8.30078 18.6706 7.5ZM4.59677 10C4.59677 9.16016 4.64274 8.32031 4.72319 7.5H0.329435C0.122581 8.30078 0 9.13281 0 10C0 10.8672 0.122581 11.6992 0.329435 12.5H4.71935C4.64274 11.6797 4.59677 10.8398 4.59677 10ZM6.10988 13.75C6.66532 17.2383 7.9754 19.6875 9.5 19.6875C11.0246 19.6875 12.3347 17.2383 12.8901 13.75H6.10988ZM12.2121 19.2812C14.9472 18.4531 17.169 16.4023 18.2645 13.75H14.1274C13.7903 15.9727 13.1468 17.9609 12.2121 19.2812ZM0.739314 13.75C1.83488 16.4023 4.05282 18.4531 6.79173 19.2812C5.85706 17.9609 5.21351 15.9727 4.87641 13.75H0.739314Z" fill="#848895" />
                                    </svg>
                                    en
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer