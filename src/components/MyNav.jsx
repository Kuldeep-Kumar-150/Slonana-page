import React, { useState } from 'react'
import pageLogo from '../assets/img/svg/page-logo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { First } from 'react-bootstrap/esm/PageItem';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MyNav = () => {
  const [nav, setNav] = useState(false);
  if (nav) {
    document.body.style.overflow = "hidden"
  }
  else {
    document.body.style.overflow = "visible"
  }
  return (
    <nav>
      <div className='nav_bg_clr'>
        <Container className="custom_container">
          <p className='ff_roboto text-center fw-normal fs_sm mb-0 py-1'>Breakpoint 2023 - New City. New Vibes - Get Early Access - &gt;</p>
        </Container>
      </div>
      <div className='bg_lightblack pe-lg-4 pe-xl-0 py-3'>
        <Container className="custom_container mt-1">
          <div className='d-lg-flex align-items-center justify-content-between'>
            <div className="d-flex align-items-center justify-content-between">
              <Link to={"/"}> <a className='z_index_21' href="#"><img width={181} height={27} src={pageLogo} alt="pageLogo" /></a></Link>
              <div onClick={() => setNav(!nav)} className={nav === true ? "menu_icon d-lg-none z_index_5 z_index_21" : " z_index_5 d-lg-none menu_icon_1 z_index_21"}>
                <div className="menu_icon_border p-2">
                  <span className='menu_line'></span>
                  <span className='menu_line'></span>
                  <span className='menu_line'></span>
                </div>
              </div>
            </div>
            <div className={nav ? "d-flex flex-column justify-content-center align-items-center flex-lg-row hide_nav" : "show_nav d-flex flex-column justify-content-center align-items-center flex-lg-row"}>
              <div className='mb-2 mb-lg-0'>
                <DropdownButton className='ff_helvetica' title="Learn">
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link1</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link2</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link3</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='ms-lg-4 ps-lg-3 my-2'>
                <Link to={"/build"}>
                  <DropdownButton className='ff_helvetica' title="Build">
                    {/* <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link1</Dropdown.Item>
                    <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link2</Dropdown.Item>
                    <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link3</Dropdown.Item> */}
                  </DropdownButton>
                </Link>

              </div>
              <div className='ms-lg-4 ps-lg-3 my-2'>
                <DropdownButton className='ff_helvetica' title="Network">
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link1</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link2</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link3</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='ms-lg-4 ps-lg-3 my-2'>
                <DropdownButton className='ff_helvetica' title="Community">
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link1</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link2</Dropdown.Item>
                  <Dropdown.Item onClick={() => setNav(!nav)} className='text-white'>Link3</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </Container>
      </div >
    </nav >
  )
}

export default MyNav