import React from 'react';
import Icon1 from '../../images/image3.svg';
import Icon2 from '../../images/image4.svg';
import Icon3 from '../../images/image5.svg';
import {ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP} from './servicesStyles';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2> Reduce Expenses </ServicesH2>
                        <ServicesP> Our services will ensure to reduce your expenses and increasing your revenue </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2> Virtual Offices </ServicesH2>
                        <ServicesP> Access our servicess anywhere and anytime </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2> Premium Privilege </ServicesH2>
                        <ServicesP> Use the privilege to get a cashback every shopping </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
