import React from 'react';
import { Button } from '../buttonStyles';
import { Column2, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ButtonWrap } from './infosectionStyles';

const InfoSection = ({ id, 
    ligthBg, 
    lightText, 
    ligthTextDesc, 
    topLine, 
    headLine, 
    description, 
    buttonLabel, 
    imgStart, 
    img, 
    alt, 
    dark, 
    primary, 
    darkText, 
    dark2}) => {

    return (
        <>
            <InfoContainer ligthBg={ligthBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine> {topLine} </TopLine>
                                <Heading lightText={lightText}> {headLine} </Heading>
                                <Subtitle darkText={darkText}> {description} </Subtitle>
                                <ButtonWrap>
                                    <Button to='home' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        primary={primary ? 'true' : 'false'} 
                                        dark={dark ? 'true' : 'false'} 
                                        dark2={dark2 ? 'true' : 'false'}> {buttonLabel} </Button>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default InfoSection;
