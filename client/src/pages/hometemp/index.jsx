import React from "react";
import ReactDOM from "react-dom/client";
import ComingSoon from "components/ComingFall23";
import Prototype from "components/Prototype";
import ComingSoonContact from "components/ComingFallContact";
/*import Team from "pages/teamcomingsoon";*/
import Team from "pages/Company/AboutUs/sections/Team";
import { blueGrey } from "@mui/material/colors";
import "./index.scss";
import Image1 from '../../assets/images/canva/1.png';
import Image2 from '../../assets/images/canva/2.png';


//header, footer, theme
//import App from "../../App";
//// components
//import HomePage from "../home";
//import SearchArticles from "../../components/search-articles";



const HomeTemp = () => {
    return (
        
        <div className="centered-container" >
            <img src={Image1} alt="Coming Soon" />
            <a href="mailto:abarasch@medexplain.org?subject=MedExplain Inquiry" className="centered-content">
            <img src={Image2} alt="Patient Testimonials" />
            </a>                 
            </div>
         

           );
};

export default HomeTemp;