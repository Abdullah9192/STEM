import React from 'react'
import NavbarImage from '../Components/NavbarImage.js';
import Category from '../Components/Category.js'
import MissionEmpower from '../Components/MissionEmpower.js';
// import Consultant from './../Components/Consultant';
import AboutUs from '../Components/AboutUs.js';
import FAQ from '../Components/FAQ.js';
import Footer from '../Components/Footer.js';
import Test from '../Components/Test.js';

const HomePage = () => {
  return (
    <div>
      <NavbarImage />
      <Category/>
      <MissionEmpower/>
      <Test/>
      {/* <Consultant/> */}
      <AboutUs/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default HomePage
