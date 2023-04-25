import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FirstPage from './components/FirstPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondPage from './components/SecondPage';
import { Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import PreLoader from './components/PreLoader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/build' element={<SecondPage />} />
      </Routes>
      <BackToTop />
      <PreLoader />
    </>
  );
}

export default App;
