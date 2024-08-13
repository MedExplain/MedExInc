/*home*/
import React from 'react';
import HomeSearch from '../../components/homeSearch';
import CredibilitySection from '../../components/credibility';
import Sponsors from '../../components/sponsors';


const HomeNew = () => {
    return (
        <div>
            <HomeSearch />
            <CredibilitySection />
            <Sponsors />
        </div>
    );
};

export default HomeNew;
