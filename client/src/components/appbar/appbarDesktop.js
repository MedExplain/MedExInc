import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logos/medex_logo.png';
import Actions from './actions';

const AppbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  padding: 0 20px;  // Adjust padding as needed
  position: fixed;
  top: 0;
  width: 100%;
`;

const AppbarHeader = styled.h4`
  margin: 0;  // Removes default margin
  padding: 10px 0;  // Gives some padding at the top and bottom
  color: white;  // Set the color for the header text
  flex-grow: 1;
  text-align: left;  // Adjust text alignment as needed

  a {
    text-decoration: none;
    color: inherit;  // Inherits color from parent
  }

  img {
    width: auto;  // Adjust logo width as needed
    height: auto;  // Keeps the aspect ratio of the image
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  && {
    padding: 10px 15px;
    font-size: .75em !important;
    text-decoration: none;
    color: #9B9C9A; 
     font-weight: bold;
   
    &:hover {
     color: #252525;
    }
  }
`;

// Assuming this is a styled component for <a> tags similar to NavLink
const MailtoLink = styled.a`
  && {
    padding: 10px 15px;
    font-size: .75em !important;
    text-decoration: none;
    color: #9B9C9A;
    font-weight: bold;

    &:hover {
     color: #252525;
    }
  }
`;

export default function AppbarDesktop({ matches }) {
    // Email subject line
    const subject = encodeURIComponent("Inquiry Regarding MedExplain");
  return (
    <AppbarContainer>
      <AppbarHeader>
        <Link to="/">
          <img
            alt="MedExplain logo"
            src={Logo}
          />
        </Link>
        {/* Add other links or content here if needed */}
          </AppbarHeader>
          <NavLinks>
           {/*   <NavLink to="/search">Search</NavLink>*/}
            {/*  <NavLink to="/about">About</NavLink>*/}
              {/*  <NavLink to="/contact">Contact</NavLink>*/}
              <MailtoLink href={`mailto:abarasch@medexplain.org?subject=${subject}`}>Contact</MailtoLink>
          </NavLinks>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
