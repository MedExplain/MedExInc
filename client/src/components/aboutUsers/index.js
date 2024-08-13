import React from 'react';
import './index.scss';

const WorldInfo = () => {
    return (
        <div className="world-info-container">
            <h1 className="medical-information">
                Providing medical information <br />
                to over <i>half a million</i> users.
            </h1>
            <div className="world-image" />
            <div className="visitors-count">510,000 + VISITORS</div>
            <div className="countries-count">200 + COUNTRIES</div>
        </div>
    );
};

export default WorldInfo;
