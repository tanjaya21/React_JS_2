import React, { useState } from'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBackGround, VideoBackGround, HeroContent, HeroP, HeroH1, HeroButtonWrapper, ArrowForward, ArrowRight } from './herosectionStyles';
import { Button } from '../buttonStyles';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBackGround>
                <VideoBackGround autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackGround>
            <HeroContent>
                <HeroH1> E-Banking System Make Life Easier </HeroH1>
                <HeroP> Sign Up Now, Grab the Discount Now </HeroP>
                <HeroButtonWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                     Get Started Now
                     {hover ? < ArrowForward/> :<ArrowRight/>} 
                     </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
