import React from 'react';
import styled from 'styled-components';
import TimelineImage from 'assets/images/credchart.png'; 
import ArticleInterfaceImage from 'assets/images/knowledge.png';

// Styled components
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 110px 40px 40px 100px;
  gap: 10px;
  background: linear-gradient(253.52deg, #E0E8FF 0.63%, rgba(221, 227, 239, 0.367927) 99.99%, rgba(220, 226, 237, 0.29) 100%);
  
  // Add a media query for smaller screens
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 1; // To ensure content comes after the infographics on smaller screens
  }
`;

const InfographicContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media (max-width: 768px) {
    align-items: center;
    order: 5;
         }
`;

const Infographic = styled.img`
  width: 100%; // Responsive width
  max-width: 406px; // Max width for large screens
  height: auto;
  margin-top: 130px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 20px; // Reduce top margin on smaller screens
      order: 2;
  }
`;

const Infographic2 = styled.img`
  width: 100%; // Responsive width
  max-width: 361px; // Max width for large screens
  height: auto;
  margin-bottom: 80px;
  margin-left:120px;

  @media (max-width: 768px) {
    margin-bottom: 40px; // Reduce bottom margin on smaller screens
      margin-left:0px;
       order: 6;
  }
`;

const Title = styled.h2`
  font-size: 38px;
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.0;
  font-family: 'Roboto', sans-serif; 
   padding: 10px 0px 0px 0px;
    @media (max-width: 768px) {
        order: 3;
        text-align:center;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  line-height: 1.4; 
  margin-bottom: 20px;
   font-family: 'Roboto', sans-serif; 
      @media (max-width: 768px) {
        order: 4;
         text-align:center;
  }
`;
const LearnMoreButton = styled.button`
  background-color: #443A8A;
  color: white;
  border: none;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width:180px;

  margin-top: 20px;
  &:hover {
    background-color: #0d2f6a;
  }
    @media (max-width: 768px) {
   order: 8;
    padding: 4px 14px 20px 14px;
  }
`;

// Main React component
const CredibilitySection = () => {
    return (
        <MainContainer>
            <Content>
                <Title>We ensure our articles are credible and trustworthy.</Title>
                <Text>
                    Our content is curated and crafted by experienced medical professionals, including licensed doctors and medical students who work under the expert guidance of experienced physicians.
                    <br/>&#160;<br/>
                    Information is then subjected to a thorough evaluation process by qualified experts to ensure its precision. This review process enhances the credibility of the information presented, providing users with reliable insights into various health topics. Finally, our dedication to transparency is reflected in our practice of displaying the credentials of the content creators.
                </Text>                        
                <Infographic src={ArticleInterfaceImage} alt="Article Interface" />
            </Content>
            <InfographicContainer>
                <Infographic2 src={TimelineImage} alt="Process Timeline" />            
                 <Title>Clear and easy to understand.</Title>
                <Text>
                    Our articles are designed to improve overall comprehension by providing clear, comprehensible explanations. We also provide videos that are relatable and situation-based to help users visually connect their experience with the information.
                    <br />&#160;<br />
                    This effort aims to address gaps in understanding that are closely tied to consequential decisions about health. Our content encourages patients to make informed decisions, improving adherence and outcomes.
                </Text>
                <LearnMoreButton>Learn more about us</LearnMoreButton>              
            </InfographicContainer>
        </MainContainer>
    );
};

export default CredibilitySection;
