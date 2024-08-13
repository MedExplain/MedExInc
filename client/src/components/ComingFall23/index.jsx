import React from "react";
import "./index.scss";
import image from "./Website mock-up.png";

const ComingSoon = () => {
    return (
        //<div  style={{ display: "table", width: "99%", paddingLeft: "15px", paddingRight: "15px", }}>
        //            <div  style={{ display: "table-cell", width: "30%", textAlign: "right", paddingTop: "0px", }}>
        //        <img src={image} alt="MedExplain" width="100%" />
        //    </div>
        //</div>
        <div className="containercoming" style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%", // Change the width to 100%
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem", // Change the paddingRight to 0px
        }}>
            <div className="image-column" style={{
                textAlign: "right",
                boxSizing: "border-box",
            }}>
                <img src={image} alt="MedExplain" width="100%" />
            </div>
            <div className="text-column" style={{
               boxSizing: "border-box",
            }}>
                <h2 className="comingSoon" style={{ margin: "0", fontWeight: "bold", marginBottom: '0.5rem' }}>Coming Soon...</h2>
                <p className="comingSoon">
                    MedExplain is a free online resource providing engaging, easily understood, and well-researched medical information.
                </p>
                <p>
                <br/>
                    The MedExplain platform will feature:
                </p>
                <ul style={{ marginLeft: "2.5em" }}>
                    <li>480+ articles and 70+ videos, with more being created every day!</li>
                    <li>Search functionality</li>
                    <li>Ability to save and share content</li>
                    <li>Multilingual functionality</li>
                </ul>
            </div>
        </div>

   );
};

export default ComingSoon;
