import React from 'react';
import './index.scss';
import ResearchOneImage from '../../assets/images/about/Research1.png';
import ResearchTwoImage from '../../assets/images/about/Research2.png';

const AboutBeyond = () => {
    return (
        <div className="medexplain-containerB">
            <div className="medexplain-header-containerB">
                <h1 className="medexplain-headerB">Beyond our search engine, we're helping to <i>push the needle</i><br />
                    on medical research as an educational intervention
                    <br />to improve disparities in care.</h1>
            </div>
            <div className="medexplain-body-containerB">
                <div className="column-container">
                    <div className="medexplain-subtitleB">Published Findings</div>
                    <img src={ResearchOneImage} className="researchImageB" alt="Published Findings" />
                </div>
                <div className="column-container">
                    <div className="medexplain-subtitleB">Ongoing Research</div>
                    <img src={ResearchTwoImage} className="researchImageB" alt="Ongoing Research" />
                </div>
            </div>
        </div>

    );
};

export default AboutBeyond;
