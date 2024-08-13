import { useEffect, useRef } from "react";

// rellax
import Rellax from "rellax";

//// typed-js
import * as Typed from "typed.js";

// @mui material components
/*import Container from "@mui/material/Container";*/
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
/*import MKBox from "components/MKBox";*/
/*import MKTypography from "../../components/MKTypography"; removed for open source*/
/*import MKButton from "components/MKButton";*/

// Material Kit 2 PRO React examples
//import DefaultNavbar from "examples/Navbars/DefaultNavbar";
///*import DefaultFooter from "examples/Footers/DefaultFooter";*/
import CenteredFooter from "components/footer";

// About Us page sections
//import Information from "pages/MedExHomeTemp/AboutUs/sections/Information";
//import Team from "pages/MedExHomeTemp/AboutUs/sections/Team";
//import Featuring from "pages/MedExHomeTemp/AboutUs/sections/Featuring";
//import Newsletter from "pages/MedExHomeTemp/AboutUs/sections/Newsletter";

// Routes
//import routes from "TimPages/routes";
//import footerRoutes from "TimPages/footer.routes";

// Images
/*import bgImage from "assets/images/bg-about-us.jpg";*/
import bgImage from "assets/images/bg-med-explain.jpg";

// mui
//import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";

// @mui material components
// import theme from "./styles/theme";
/*import theme from "assets/theme";*/
import CssBaseline from "@mui/material/CssBaseline";

// components
import Footer from "./components/footer";
import Appbar from "./components/appbar";
import ArticleList from "./components/articles";
import styled from 'styled-components';

// styles
import "./App.css";
//import About from "./pages/about";
///*import Events from './components/Events/Events';*/
//import {Route, Routes } from 'react-router-dom';
import Router from "./router";

import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // This ensures that the page container fills at least the full viewport height
`;

const MainContentContainer = styled.div`
  padding-top: 60px; // Default padding for non-mobile screens
   flex: 1;
   height:100%;
  /*padding-bottom:120px;*/
 /* removed 032124*/
  
  // Media query for mobile screens
  @media (max-width: 768px) {
      padding-top: 120px; 
/*      padding-bottom:20px;*/
    //   border: 1px solid red; //for debugging spacing issues
  }
  
 
`;

// components
/*import SearchArticles from "./components/search-articles";*/

function App() {
    useEffect(() => {
        document.title = "MedExplain - Home";
    }, []);

    return (
     <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PageContainer>
                <Appbar  />
                <MainContentContainer>
                    {/* Your main content */}
                    <Router />
                </MainContentContainer>
                    <CenteredFooter />
                </PageContainer>
            </ThemeProvider>         
        </BrowserRouter>
    );
}


export default App;

