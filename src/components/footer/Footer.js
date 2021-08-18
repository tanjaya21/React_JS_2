import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterSocialMedia, SocialMediaWrap, Logo,  SocialMediaIcons, SocialMediaIconLink, ServicesAndTerms} from './footerStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> More Info </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works? </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> More Info </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works? </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> More Info </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works? </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> More Info </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works? </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <FooterSocialMedia>
                    <SocialMediaWrap >
                        <Logo to='/'> Logo </Logo>
                        <ServicesAndTerms> All rights reserved. </ServicesAndTerms>
                        <SocialMediaIcons >
                            <SocialMediaIconLink href='/' target="" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialMediaIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrap>
                </FooterSocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
