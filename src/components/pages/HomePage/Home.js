import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Typing from '../Typing/Typing'
import Services from '../Services/Services'
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Services/>
      <Typing />
      <Footer />
    </>
  );
}

export default Home;