import React from 'react';
import './index.scss';
import thirtyNineImage from '../../assets/images/about/39.png';
import seventyThreeImage from '../../assets/images/about/73.png';
import seventyThreebImage from '../../assets/images/about/73b.png';
import ninetySixImage from '../../assets/images/about/96.png';

const AboutResearch = () => {
    return (
        <div className="medexplain-containerR">
            <div className="medexplain-header-containerR">
                <h1 className="medexplain-headerR">Research-backed education <i>proven to increase adherence</i><br />
                    to preventative and treatment-based healthcare.</h1>
            </div>
            <div className="medexplain-body-containerR">
                        
                <img src={thirtyNineImage} className="researchImage" alt="39% Statistic" />
                <img src={seventyThreeImage} className="researchImage" alt="73% Statistic" />
                <img src={seventyThreebImage} className="researchImage" alt="73% Statistic" />
                <img src={ninetySixImage} className="researchImage" alt="96% Statistic" />
                    </div>             
        </div>
    );
};

export default AboutResearch;
