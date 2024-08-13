import React from "react";
import ReactDOM from "react-dom/client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import "./index.scss";

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 PRO React examples
import TransparentTeamCard from "../../examples/Cards/TeamCards/TransparentTeamCard";

// Images
import team1 from "../../assets/images/bruce-mars.jpg";
import team2 from "../../assets/images/team-3.jpg";
import team3 from "../../assets/images/team-4.jpg";

//header, footer, theme
//import App from "../../App";
//// components
//import HomePage from "../home";
//import SearchArticles from "../../components/search-articles";



const Team = () => {
    return (
        <div id="container">
            <div id="row">

                <div id="left">
                    <h4 id="header2">Our Team</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/15a1a4dc-39bb-4700-8401-0b644b7c4100/public" alt="Dr. Safford" /></p>
                </div>

                <div id="middleleft">
                    <h4>&#160;</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/25cda698-03eb-41ee-8545-3024c6f35400/public" alt="Steve Cohen" /></p>
                </div>
                <div id="middleright">
                    <h4>&#160;</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/68288336-781d-460b-c2e9-decaadbec600/public" alt="Dr. Elizabeth Baquero" /></p>
                </div>

                {/*<div id="right">*/}
                {/*    <h4></h4>*/}

                {/*</div>*/}

            </div>{/*Susans note: does this not show up?*/}
            <div id="row">
                <div>&#160;</div>
                <div id="left">
                    <h4>Monika Safford, MD</h4>
                    <p>Founder<br />Chief Scientific Officer<br />&#160;</p>
                </div>
                <div id="middleleft">
                    <h4>Steve Cohen, CFP, CPA/PFS</h4>
                    <p>Chief Executive Officer<br />&#160;<br />&#160;</p>
                </div>
                <div id="middleright">
                    <h4>Elizabeth Baquero, EdD</h4>
                    <p>Chief Education Officer<br />&#160;<br />&#160;</p>
                </div>
                <div>&#160;</div>
            </div>
{/*            <div id="row2">*/}

{/*                <div id="left">*/}
{/*                    <h4 id="header2">Medical Advisory Board</h4>*/}
{/*       */}{/*             <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/717667c1-bad0-4294-4715-3aaf9ef2ec00/public" alt="Dr. Iris Navarro"  /></p>*/}
{/*                </div>*/}

{/*                <div id="middleleft">*/}
{/*                    <img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/91cf8e19-4bdf-4df1-5f49-8a37a817e500/public" alt="Dr. Eloise Chapman" /> */}
{/*                </div>*/}
{/*                <div id="middleright">*/}
                  
{/*                </div>*/}

{/*                <div id="right">*/}
{/*                    <h4></h4>*/}
{/*                    <p></p>*/}
{/*                </div>*/}

{/*            </div>*/}
            {/*<div id="row">*/}

            {/*    <div id="left">*/}
            {/*        */}{/*<h4>Iris Navarro&#8211; Mill&#0225;n,<br />MD, MSPH</h4>*/}
            {/*        */}{/*<p><br />&#160;</p>*/}
            {/*    </div>*/}

            {/*    <div id="middleleft">*/}
            {/*        */}{/*<h4>Eloise Chapman, MD</h4>*/}
            {/*        */}{/*<p><br />&#160;<br />&#160;</p>*/}
            {/*    </div>*/}
            {/*    <div id="middleright">*/}
            {/*        <h4></h4>*/}
            {/*        <p></p>*/}
            {/*    </div>*/}

            {/*    <div id="right">*/}
            {/*        <h4></h4>*/}
            {/*        <p></p>*/}
            {/*    </div>*/}

            {/*</div>*/}
            <div id="row3">

                <div id="left">
                   {/* <h4 id="header2">Education Advisory Board</h4>*/}
                                   </div>

                <div id="middleleft">
                    {/*<h4></h4>*/}
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/e24ffb4a-50c5-4f48-af23-76c8a892ad00/public" alt="Ariel Barasch" width="126px" /></p>
                    {/*<p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/c27b2eec-10e7-41b9-f900-80481c635700/public" alt="Dr. Laura Barre" /></p>*/}
                </div>
                <div id="middleright">
                   {/* <h4></h4>*/}
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/eee42702-6b50-41ea-1587-713fa4517a00/public" alt="Susan M. Anspaugh" /></p>
                </div>

                <div id="right">
                    <h4></h4>
                    <p></p>
                </div>

            </div>
            <div id="row">     
                <div>&#160;</div>
                <div id="left">
                                </div>

                <div id="middleleft">
                    <h4>Ariel Barasch</h4>
                    <p>Director of Operations
                        <br /> &#160;
                    </p>
                                   </div>


                <div id="middleright">
                    <h4>Susan Anspaugh</h4>
                    <p>Director of Information<br />
                        Technology<br /></p>
                    {/*<h4>Laura Barre, MD, RD</h4>*/}
                    {/*<p><br />&#160;*/}
                    {/*    <br />&#160;</p>*/}
                </div>
                <div id="right">
                 
                </div>

                <div id="right">
                  
                </div>

            </div>
            <div id="row" >

                <div id="left">
                    <h4>&#160;</h4>
                    <p><br />&#160;</p>
                </div>

                <div id="middleleft">
                    <h4>&#160;</h4>
                    <p><br />&#160;</p>
                </div>
                <div id="middleright">
                    <h4>&#160;</h4>
                    <p><br />&#160;</p>
                </div>

                <div id="right">
                    <h4>&#160;</h4>
                    <p><br />&#160;</p>
                </div>

            </div>

            <div id="mobilerow">

                <div id="left">
                    <h4 id="header2">Staff</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/15a1a4dc-39bb-4700-8401-0b644b7c4100/public" alt="Dr. Safford" /></p>
                </div>
                <div id="left">
                    <h4>Monika Safford, MD</h4>
                    <p>Founder<br />
                        Chief Scientific Officer</p>
                    <br/>
                </div>

                <div id="middleleft">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/25cda698-03eb-41ee-8545-3024c6f35400/public" alt="Steve Cohen" /></p>
                </div>
                <div id="middleleft">
                    <h4>Steve Cohen, CFP, CPA/PFS</h4>
                    <p>Chief Executive Officer
                        <br /> &#160;
                    </p>
                    <br />
                </div>
                <div id="middleright">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/68288336-781d-460b-c2e9-decaadbec600/public" alt="Dr. Elizabeth Baquero" width="126" /></p>
                </div>
                <div id="middleright">
                    <h4>Elizabeth Baquero, EdD</h4>
                    <p>Chief Education Officer
                        <br /> &#160;
                    </p>
                </div>
                <div id="middleright">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/e24ffb4a-50c5-4f48-af23-76c8a892ad00/public" alt="Ariel Barasch" width="126px" /></p>
                </div>
                <div id="middleright">
                    <h4>Ariel Barasch</h4>
                    <p>Director of Operations
                        <br /> &#160;
                    </p>
                </div>

                <div id="right">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/eee42702-6b50-41ea-1587-713fa4517a00/public" alt="Susan M. Anspaugh" /></p>
                </div>
                <div id="right">
                    <h4>Susan Anspaugh</h4>
                    <p>Director of Information<br />
                        Technology<br /></p>

                </div>
            </div>

{/*            <div id="mobilerow">*/}
{/*                <div id="left">*/}
{/*                    <h4 id="header2">Medical Advisory Board</h4>*/}
{/*    */}{/*                <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/717667c1-bad0-4294-4715-3aaf9ef2ec00/public" alt="Dr. Iris Navarro" /></p>*/}
{/*                </div>*/}
{/*                <div id="left">*/}
{/*                    */}{/*<h4>Iris Navarro&#8211; Mill&#0225;n,<br />MD, MSPH</h4>*/}
{/*                    */}{/*<p><br />&#160;</p>*/}
{/*                </div>*/}

{/*                <div id="middleleft">*/}
{/*                    <img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/91cf8e19-4bdf-4df1-5f49-8a37a817e500/public" alt="Dr. Eloise Chapman" />*/}
{/*                </div>*/}
{/*                <div id="middleleft">*/}
{/*                    */}{/*<h4>Eloise Chapman, MD</h4>*/}
{/*                    */}{/*<p><br />&#160;<br />&#160;</p>*/}
{/*                </div>*/}


{/*            </div>*/}

            {/*<div id="mobilerow">*/}
            {/*    <div id="left">*/}
            {/*        <h4 id="header2">Education Advisory Board</h4>*/}
            {/*        <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/68288336-781d-460b-c2e9-decaadbec600/public" alt="Dr. Elizabeth Baquero" /></p>*/}
            {/*    </div>*/}
            {/*    <div id="left">*/}
            {/*        <h4>Elizabeth Baquero, EdD</h4>*/}
            {/*        <p>Chief Education Officer<br />*/}
            {/*            <br /></p>*/}
            {/*    </div>*/}

            {/*    <div id="middleleft">*/}
            {/*        */}{/*<h4></h4>*/}
            {/*        */}{/*<p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/c27b2eec-10e7-41b9-f900-80481c635700/public" alt="Dr. Laura Barre" /></p>*/}
            {/*    </div>*/}
                                
            {/*    <div id="middleleft">*/}
            {/*        */}{/*<h4>Laura Barre, MD, RD</h4>*/}
            {/*        */}{/*<p><br />&#160;*/}
            {/*        */}{/*    <br />&#160;</p>*/}
            {/*    </div>*/}
            {/*    <br />&#160;*/}
            {/*</div>*/}
        </div>
    );
};

export default Team;