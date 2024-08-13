import React from 'react';
import styled from 'styled-components';
import WeillCornellLogo from 'assets/images/sponsors/WCM BioVenture eLab.png';
import CALSLogo from 'assets/images/sponsors/CALS.png';
import CCHELogo from 'assets/images/sponsors/CCHEq.png';
import DalioLogo from 'assets/images/sponsors/Dalio.png';
import eCornellLogo from 'assets/images/sponsors/eCornell BoA Womens Entrepreneurship.jpg';
import LeonLogo from 'assets/images/sponsors/Leon Lowenstein Foundation.png';
import NYPLogo from 'assets/images/sponsors/NYP.jpg';
import StonyBrookLogo from 'assets/images/sponsors/Stony Brook.jpg';
import ConnecticutLogo from 'assets/images/sponsors/University of Connecticut.png';
import StFrancis from 'assets/images/sponsors/St Francis Hospital.png';

const Container = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Adjusted for 10 logos over 2 rows
  grid-template-rows: repeat(2, 1fr); // This will ensure two equal rows
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // Keep two columns on smaller screens
  }
`;

const Logo = styled.img`
  margin: 10px;
  max-height: 110px;
  max-width: 140px; 
  height: auto;

  @media (max-width: 768px) {
    max-width: 130px;
  }
`;

const SponsorBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DescriptionText = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center; /* Align text center horizontally */
  display: block; /* Ensures the element is a block-level element */
  width: fit-content; /* Makes the width of the element as wide as its content */
  margin-left: auto; /* With auto margins on both left and right, */
  margin-right: auto; /* the block will center within its container */
`;

const Sponsors = () => {
    return (
        <>
        <DescriptionText>
            Backed by leading medical and sponsor organizations
      </DescriptionText>
            <Container>
                <SponsorBlock>
                    <Logo src={WeillCornellLogo} alt="Weill Cornell Medicine BioVenture eLab" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={eCornellLogo} alt="eCornell Women's Entrepreneurship" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={CALSLogo} alt="Cornell CALS" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={NYPLogo} alt="NewYork-Presbyterian" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={StonyBrookLogo} alt="Stony Brook University" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={ConnecticutLogo} alt="University of Connecticut School of Medicine" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={StFrancis} alt="Trinity Health Of New England Saint Francis Hospital and Medical Center" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={CCHELogo} alt="Cornell Center for Health Equity" />
                </SponsorBlock>       
                <SponsorBlock>
                    <Logo src={DalioLogo} alt="Dalio Philanthropies" />
                </SponsorBlock>
                <SponsorBlock>
                    <Logo src={LeonLogo} alt="The Leon Lowenstein Foundation" />
                </SponsorBlock>
                </Container>
        </>
    );
};

export default Sponsors;
