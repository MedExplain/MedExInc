import React from "react";
import ReactDOM from "react-dom/client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import "./index.scss";

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
/*import MKTypography from "../../components/MKTypography"; removed for open source*/

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
                    <h4 id="header2">Staff</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/15a1a4dc-39bb-4700-8401-0b644b7c4100/public" alt="Dr. Safford" /></p>
                </div>

                <div id="middleleft">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/25cda698-03eb-41ee-8545-3024c6f35400/public" alt="Steve Cohen" /></p>
                </div>
                <div id="middleright">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/e24ffb4a-50c5-4f48-af23-76c8a892ad00/public" alt="Ariel Barasch" width="126px" /></p>
                </div>

                <div id="right">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/70b1396d-7057-451d-8d85-c7edf28f7500/public" alt="Susan M. Anspaugh" /></p>
                </div>

            </div>
            <div id="row">

                <div id="left">
                    <h4>Monika Safford, MD</h4>
                    <p>Founder<br/>
                 Chair, Medical Advisory Board</p>
                </div>

                <div id="middleleft">
                    <h4>Steve Cohen, CFP, CPA/PFS</h4>
                    <p>Chief Executive Officer
                        <br /> &#160;
                    </p>
                </div>
                <div id="middleright">
                    <h4>Ariel Barasch</h4>
                    <p>Director of Operations
                    <br/> &#160;
                    </p>
                </div>

                <div id="right">
                    <h4>Susan Anspaugh</h4>
                    <p>Director of Information<br />
                        Technology<br /></p>
                    
                </div>

            </div>
            <div id="row2">

                <div id="left">
                    <h4 id="header2">Medical Advisory Board</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/717667c1-bad0-4294-4715-3aaf9ef2ec00/public" alt="Dr. Iris Navarro"  /></p>
                </div>

                <div id="middleleft">
                    <img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/91cf8e19-4bdf-4df1-5f49-8a37a817e500/public" alt="Dr. Eloise Chapman" /> 
                </div>
                <div id="middleright">
                  
                </div>

                <div id="right">
                    <h4></h4>
                    <p></p>
                </div>

            </div>
            <div id="row">

                <div id="left">
                    <h4>Iris Navarro&#8211; Mill&#0225;n,<br />MD, MSPH</h4>
                    <p><br />&#160;</p>
                </div>

                <div id="middleleft">
                    <h4>Eloise Chapman, MD</h4>
                    <p><br />&#160;<br />&#160;</p>
                </div>
                <div id="middleright">
                    <h4></h4>
                    <p></p>
                </div>

                <div id="right">
                    <h4></h4>
                    <p></p>
                </div>

            </div>
            <div id="row3">

                <div id="left">
                    <h4 id="header2">Education Advisory Board</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/68288336-781d-460b-c2e9-decaadbec600/public" alt="Dr. Elizabeth Baquero" /></p>
                </div>

                <div id="middleleft">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/c27b2eec-10e7-41b9-f900-80481c635700/public" alt="Dr. Laura Barre" /></p>
                </div>
                <div id="middleright">
                    <h4></h4>
                    <p></p>
                </div>

                <div id="right">
                    <h4></h4>
                    <p></p>
                </div>

            </div>
            <div id="row">

                <div id="left">
                    <h4>Elizabeth Baquero, EdD</h4>
                    <p>Chair of Education Advisory<br/>Board<br />
                        <br/></p>
                </div>

                <div id="middleleft">
                    <h4>Laura Barre, MD, RD</h4>
                    <p><br />&#160;
                        <br />&#160;</p>
                </div>
                <div id="middleright">
                 
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
                        Chair, Medical Advisory Board</p>
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
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/70b1396d-7057-451d-8d85-c7edf28f7500/public" alt="Susan M. Anspaugh" /></p>
                </div>
                <div id="right">
                    <h4>Susan Anspaugh</h4>
                    <p>Director of Information<br />
                        Technology<br /></p>

                </div>
            </div>

            <div id="mobilerow">
                <div id="left">
                    <h4 id="header2">Medical Advisory Board</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/717667c1-bad0-4294-4715-3aaf9ef2ec00/public" alt="Dr. Iris Navarro" /></p>
                </div>
                <div id="left">
                    <h4>Iris Navarro&#8211; Mill&#0225;n,<br />MD, MSPH</h4>
                    <p><br />&#160;</p>
                </div>

                <div id="middleleft">
                    <img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/91cf8e19-4bdf-4df1-5f49-8a37a817e500/public" alt="Dr. Eloise Chapman" />
                </div>
                <div id="middleleft">
                    <h4>Eloise Chapman, MD</h4>
                    <p><br />&#160;<br />&#160;</p>
                </div>


            </div>

            <div id="mobilerow">
                <div id="left">
                    <h4 id="header2">Education Advisory Board</h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/68288336-781d-460b-c2e9-decaadbec600/public" alt="Dr. Elizabeth Baquero" /></p>
                </div>
                <div id="left">
                    <h4>Elizabeth Baquero, EdD</h4>
                    <p>Chair of Education Advisory<br />Board<br />
                        <br /></p>
                </div>

                <div id="middleleft">
                    <h4></h4>
                    <p><img className="profile" src="https://imagedelivery.net/tnLoXtE2lRCkkWrVLrLRlA/c27b2eec-10e7-41b9-f900-80481c635700/public" alt="Dr. Laura Barre" /></p>
                </div>
                                
                <div id="middleleft">
                    <h4>Laura Barre, MD, RD</h4>
                    <p><br />&#160;
                        <br />&#160;</p>
                </div>
                <br />&#160;
            </div>
        </div>

        //<MKBox component="section" py={6}>
        //    <Container>
        //        <Grid container item flexDirection="column" xs={12} lg={7} mb={6}>
        //            <MKBox
        //                display="flex"
        //                alignItems="center"
        //                justifyContent="center"
        //                width="3rem"
        //                height="3rem"
        //                variant="gradient"
        //                bgColor="info"
        //                color="white"
        //                shadow="md"
        //                borderRadius="lg"
        //                mb={2}
        //            >
        //                <Icon>supervisor_account</Icon>
        //            </MKBox>
        //            <MKTypography variant="h3" mb={1}>
        //                Our Awesome Team
        //            </MKTypography>
        //            <MKTypography variant="body2" color="text">
        //                This is the paragraph where you can write more details about your team. Keep you user
        //                engaged by providing meaningful information.
        //            </MKTypography>
        //        </Grid>
        //        <Grid container spacing={3} mt={6}>
        //            <Grid item xs={12} md={6} lg={4}>
        //                <TransparentTeamCard
        //                    image={team1}
        //                    name="Alec Thompson"
        //                    position="CEO / Co-Founder"
        //                    description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
        //                         />
        //            </Grid>
        //            <Grid item xs={12} md={6} lg={4}>
        //                <TransparentTeamCard
        //                    image={team2}
        //                    name="Alec Thompson"
        //                    position="CEO / Co-Founder"
        //                    description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
        //                       />
        //            </Grid>
        //            <Grid item xs={12} md={6} lg={4}>
        //                <TransparentTeamCard
        //                    image={team3}
        //                    name="Alec Thompson"
        //                    position="CEO / Co-Founder"
        //                    description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
        //                        />
        //            </Grid>
        //        </Grid>
        //    </Container>
        //</MKBox>
    );
};

export default Team;