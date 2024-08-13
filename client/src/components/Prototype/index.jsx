import React from "react";
import "./index.scss";
import image from "./PALS.png";

const Prototype = () => {
    return (
        <div className="containerproto" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "99%", }}>
            <div className="text-container" style={{ boxSizing: "border-box", verticalAlign: "top" }}>
                <h2 style={{ margin: "0", fontWeight: "bold", marginBottom: '0.5rem' }}>Current Prototype Website</h2>
                <p>
                    MedExplain has been incubated at Weill Cornell Medicine, and the current prototype of our platform, the Patient Activated Learning System, can be found at <a href="https://palsforhealth.com/" target="_blank" rel="noopener noreferrer">https://palsforhealth.com/</a>.
                </p>
            </div>
            <div className="image-container" style={{ boxSizing: "border-box" }}>
                <img src={image} alt="MedExplain" width="95%" />
            </div>
        </div>

    );
};

export default Prototype;
