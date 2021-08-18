import React,{ useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/herosection/HeroSection';
import InfoSection from '../components/infosection/InfoSection';
import { homeObjOne, 
    homeObjTwo, 
    homeObjThree  } from '../components/infosection/Data';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <InfoSection {...homeObjThree}/>
          <Footer />
        </>
    );
};

export default Home;
