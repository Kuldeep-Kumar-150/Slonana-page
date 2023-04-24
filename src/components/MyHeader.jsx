import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import brave from '../assets/img/svg/brave.svg'
import circle from '../assets/img/svg/circle.svg'
import discord from '../assets/img/svg/discord.svg'
import google from '../assets/img/svg/google.svg'
import jump from '../assets/img/svg/jump.svg'
import company from '../assets/img/svg/company-logo.svg'
import magic from '../assets/img/svg/magic.svg'

const MyHeader = () => {
    return (
        <section className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
            <Container className="custom_container">
                <div className="text-center">
                    <h1 className='fs_6xl fw-normal ff_helvetica text-white mt-5'>Powerful for developers.</h1>
                    <h2 className='fs_5xl fw-normal ff_helvetica text-white'>Fast for everyone.</h2>
                    <p className='fs_md text-white ff_helvetica fw-normal mt-4 mt-lg-5'>Bring blockchain to the people. Solana supports experiences <span className='d-lg-block'>for power users, new consumers, and everyone in between.</span></p>
                    <a className='text-white ff_roboto fw-normal fs_3xsm py-3 px_33 rounded-5 header_btn text-uppercase mt-4 mt-md-5 d-inline-block' href="#">Start building</a>
                    <a className='text-white ff_roboto fw-normal fs_3xsm border-white border-1 border py-3 px_33 rounded-5 ms-3 text-uppercase read_docs_btn' href="#">Read docs</a>
                    <p className='text_primary ff_helvetica fw-normal fs_3xsm mt-5 pt-md-4'>Powering tools and integrations from companies all around the world</p>
                </div>
                <Marquee speed={50}direction='right'>
                    <div className='d-flex justify-content-between align-items-center py-2'>
                        <img className='mx-3' src={brave} alt="company-logo" />
                        <img className='mx-3' src={circle} alt="company-logo" />
                        <img className='mx-3' src={discord} alt="company-logo" />
                        <img className='mx-3' src={google} alt="company-logo" />
                        <img className='mx-3' src={jump} alt="company-logo" />
                        <img className='mx-3' src={company} alt="company-logo" />
                        <img className='mx-3' src={magic} alt="company-logo" />
                    </div>
                </Marquee>
            </Container>
        </section>
    )
}

export default MyHeader