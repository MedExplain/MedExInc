import React from 'react';
import './index.scss';
import eightyEightImage from '../../assets/images/about/88.png';

const AboutWhy = () => {
    return (
        <div className="medexplain-containerW">
            <div className="medexplain-header-containerW">
                <h1 className="medexplain-headerW">Navigating health information online can be overwhelming and unreliable.</h1>
                <h2 className="medexplain-subheaderW">We provide easy-to-understand, trustworthy, and accessible healthcare, empowering users to make <span className="informed">informed medical decisions</span>.</h2>
            </div>
            <div className="medexplain-body-containerW">
                <div className="medexplain-content-containerW">
                    <div className="medexplain-text-sectionW">
                        <h2 className="medexplain-titleW">What is MedExplain?</h2>
                        <p className="medexplain-storyW">
                            MedExplain's <b>Patient Activated Learning System</b> is a publicly available platform
                            backed by Weill Cornell Medicine for individuals to obtain health-related
                            information sourced from trustworthy medical research. We provide clear and
                            easy-to-understand medical information, addressing real-world questions with
                            explanations that are designed to improve overall comprehension. Our content is
                            curated by our medical professionals and undergoes a double-blind peer review to
                            provide accurate and reliable information.
                        </p>
                    </div>
                    <div className="medexplain-text-sectionW">
                        <h2 className="medexplain-titleW">Why we started</h2>
                        <p className="medexplain-storyW">
                            Monika Safford, MD, a general internist, and Jeff Curtis, MD, a rheumatologist,
                            conceived of the PALS at the University of Alabama at Birmingham in 2015. The two
                            collaborated on research projects to better understand why so many people hesitate
                            to take the medicines their doctors recommend. In the course of that work,
                            we learned that many people had questions about their health that were very
                            different than what doctors wanted people to know. 88% of adults in the U.S. have
                            suboptimal health literacy; we aim to bridge that gap between marginalized
                            communities and healthcare.
                        </p>
                    </div>
                </div>
                <div className="eightySpacer">&#160;</div>
                <div className="eighty-image" >
                    <img src={eightyEightImage} className="eightyImage" alt="88% Statistic" />
                </div>
            </div>
        </div>
    );
};

export default AboutWhy;