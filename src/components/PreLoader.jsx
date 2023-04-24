import React from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/page-logo.svg'
const PreLoader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = 'none';
        document.body.classList.remove("overflow-hidden")
    }, 2000);
    return (
        <section>
            <Container>
                <div className='preloader'>
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <img className='preloader_img' src={pageLogo} alt="pageLogo" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PreLoader