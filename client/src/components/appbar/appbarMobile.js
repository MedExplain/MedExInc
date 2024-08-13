import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logos/medex_logo.png';
import Actions from './actions';

const AppbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  padding: 0 10px;  // Adjust padding as needed for mobile view
  position: fixed;
  top: 0;
  width: 100%;
`;

const AppbarHeader = styled.h4`
  margin: 0;  // Removes default margin
  padding: 10px 0;  // Gives some padding at the top and bottom
  color: white;  // Set the color for the header text
  flex-grow: 1;
  text-align: center;  // Centers the logo for mobile

  img {
    width: 200px;  // Adjust logo width as needed for mobile
    height: auto;  // Keeps the aspect ratio of the image
  }
`;
const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; // Width of the drawer
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

const DrawerLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #72a092;  // Your icon color
  cursor: pointer;
  padding: 10px;  // Adjust padding for touch targets
  font-size: 24px;  // Icon size
`;

// You can use an SVG or an icon font for the icons
const MenuIcon = () => <span>☰</span>;  // Replace with actual menu icon
//const SearchIcon = () => <span>🔍</span>;  // Replace with actual search icon

export default function AppbarMobile({ matches }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
        <AppbarContainer>
            <AppbarHeader>
                <Link to="/">
                    <img
                        alt="MedExplain logo"
                        src={Logo}
                    />
                </Link>
            </AppbarHeader>
                 <div style={{ display: 'flex' }}>
                <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                    <MenuIcon />
                </IconButton>
                <Actions matches={matches} />
            </div>                        
        </AppbarContainer>
           <Drawer show={drawerOpen}>
        <DrawerLink to="/" onClick={() => setDrawerOpen(false)}>Home</DrawerLink>
     {/*   <DrawerLink to="/search" onClick={() => setDrawerOpen(false)}>Search</DrawerLink>*/}
       {/* <DrawerLink to="/contact" onClick={() => setDrawerOpen(false)}>Contact</DrawerLink>*/}
        {/* Add more links as needed */}
      </Drawer>
      </>
    );
}
