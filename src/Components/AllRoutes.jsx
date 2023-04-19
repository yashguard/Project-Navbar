import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Help from './Help';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/help' element={<Help />} />
         <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
