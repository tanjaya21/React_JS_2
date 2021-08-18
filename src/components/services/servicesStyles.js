import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-widht: 800px; 
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-widht: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    max-height: 280px;
    padding: 30px;
    box-shadow 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 180px;
    width: 190px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5 rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10ox;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`