import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//router
import {Route, Routes, useLocation} from 'react-router-dom';
//animation
import {AnimatePresence} from 'framer-motion';
import ScrollTop from './components/ScrollTop';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<AboutUs />} />
      
     
     <Route path='/work' element={<OurWork />} />
       
       
      <Route path='/contact' element={<ContactUs />} />
        
        
      </Routes>
      </AnimatePresence>
      

    </div>
  );
}

export default App;
