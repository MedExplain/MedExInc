import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link as MuiLink } from "@mui/material";
/*import bgImage from "assets/images/blue.jpg";*/

//// Styled components
//const FooterBox = styled.footer`
//  padding-top: 2px;
//  padding-bottom: 12px;
//  position: fixed;
//  bottom: 0;
//  width: 100%;
// // background-image: linear-gradient(45deg, rgba(204, 217, 255, 1), rgba(255, 255, 255, 0.18));
//  background-image: linear-gradient(45deg, rgba(204, 217, 255, 1), rgba(255, 255, 255, .5)), url(${bgImage});
//    color: ${({ light }) => (light ? "white" : "rgb(123, 128, 154)")};
//`;

//const ContactButton = styled(MuiButton)`
//  background-color: white !important; // Set the button to white
//  color: #3C3E79; // Set text color to match the footer background
//  &:hover {
//    background-color: #e0e0e0; // A light grey for subtle hover effect
//  }
//  order: -1; // Bring the button above the social icons
//  margin-bottom: 10px; // Space below the button
//`;

const FooterBox = styled.footer`
  padding: 20px;
  background-color: #3C3E79; // Set your background color
  color: white;
  display: flex;
  justify-content: space-between; // Space between left and right items
  align-items: center; 

   @media (max-width: 768px) {
    flex-direction: column; // Stack vertically on smaller screens
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  // Styles for the left side content
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  align-items: center; // Center-align children horizontally
  margin-left: auto; // Push the container to the right
     @media (max-width: 768px) {
   margin-left: 0 ;
  }
`;


const ContactButton = styled(MuiButton)`
  background-color: white !important; // Set the button to white
  color: #3C3E79; // Set text color to match the footer background
  &:hover {
    background-color: #e0e0e0; // A light grey for subtle hover effect
  }
  margin-right: 20px; // Space to the right of the button
  margin-bottom:12px !important;
  
  @media (max-width: 768px) {
   display:none !important;
  }
`;

const Socials = styled.div`
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'center', 
  flexWrap: 'wrap'
 `;

const SocialLink = styled(MuiLink)`
  color: white !important;
  margin: 0 8px !important; // Give some space between the icons

   @media (max-width: 768px) {
    margin: 0 4px !important; // Closer spacing on smaller screens
  }
`;

const CopyRightText = styled.span`
  text-align: left; // Align the text to the left
  display: block;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem; // Adjust the font size as needed
  font-weight: 300;
  color: white;

   @media (max-width: 768px) {
    text-align: center; // Center-align text on smaller screens
    font-size: 0.75rem; // Slightly smaller font for smaller screens
  }
`;

const MobileHidden = styled.span` 
   @media (max-width: 768px) {
   display:none;
  }
`;

// Main React component
function CenteredFooter({ company, socials, light }) {
    const { href, name } = company;
    const year = new Date().getFullYear();
    const handleContactClick = () => {
        window.location.href = "mailto:abarasch@medexplain.org?subject=?subject=Inquiry%20Regarding%20MedExplain";
    };

    const renderSocials = (
        <Socials>
            {socials.map((social) => (
                <SocialLink
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {social.icon}
                </SocialLink>
            ))}
        </Socials>
    );


    return (
        <FooterBox>
            <LeftContainer>
                <CopyRightText>
                    <MobileHidden>Can't find what you're looking for? <a href='#' onClick={handleContactClick} style={{ color: 'white', fontSize: '0.875rem', fontWeight: 'normal' }}>Submit an article suggestion.</a><br /></MobileHidden>
                    MedExplain does not provide medical advice, diagnosis, or treatment.<br />
                    &copy; {year} {name}. Icons by <a style={{ color: 'white', fontSize: '0.875rem', fontWeight: 'normal' }} href="https://icons8.com" alt="Icons 8">Icons8</a>.
                </CopyRightText>
            </LeftContainer>
            <RightContainer>
                <ContactButton variant="contained" onClick={handleContactClick}>
                    Contact Us
                </ContactButton>
                {renderSocials}
            </RightContainer>
        </FooterBox>
    );
}

CenteredFooter.defaultProps = {
    company: { href: "https://medexplain.org/", name: "MedExplain" },
    socials: [
        { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/MedExplainInc" },
        { icon: <TwitterIcon fontSize="small" />, link: "https://twitter.com/MedExplainInc" },
        { icon: <LinkedInIcon fontSize="small" />, link: "https://www.linkedin.com/company/medexplain/" },
        { icon: <YouTubeIcon fontSize="small" />, link: "https://www.youtube.com/channel/UCxKgDtf4vwoCKZS17rME5_A" },
    ],
    light: false,
};

CenteredFooter.propTypes = {
    company: PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            link: PropTypes.string.isRequired,
        })
    ),
    light: PropTypes.bool,
};

export default CenteredFooter;
