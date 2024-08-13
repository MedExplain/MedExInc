import React from "react";
/*import "./index.scss";*/
import WorldInfo from 'components/aboutUsers';
import AboutWhy from 'components/aboutWhy';
import AboutResearch from "components/aboutResearch";
import AboutBeyond from "components/aboutBeyond";
import AboutSaying from "components/aboutSaying";

const About = () => {
    return (
        <>
            <WorldInfo />
            <AboutWhy />
            <AboutResearch />
            <AboutBeyond />
            <AboutSaying />
        </>
    );
};

export default About;