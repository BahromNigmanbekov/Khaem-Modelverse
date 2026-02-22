
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/home/Homepage'
import Contact from './pages/contact/Contact'
import Demopage from './pages/demopage/Demopage'
import Notfoundpage from './pages/notfoundpage/Notfoundpage'
import Shoppage from './pages/shoppage/Shoppage'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Footer from './components/footer/Footer'


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/shop' element={<Shoppage />} />
      <Route path='/demopage/:id' element={<Demopage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Notfoundpage />} />
     </Routes>
     {/* <Search/> */}
     <Footer />
    </>
  )
}

export default App
