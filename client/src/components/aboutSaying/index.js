import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import quoteOneImage from '../../assets/images/about/Quote1.png';
import quoteTwoImage from '../../assets/images/about/Quote2.png';
import quoteThreeImage from '../../assets/images/about/Quote3.png';
import quoteFourImage from '../../assets/images/about/Quote4.png';
import quoteFiveImage from '../../assets/images/about/Quote5.png';
import quoteSixImage from '../../assets/images/about/Quote6.png';
/*import quoteSevenImage from '../../assets/images/about/Quote7.png';*/

const AboutSaying = () => {
    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSliderSettings((prevState) => ({
                    ...prevState,
                    slidesToShow: 1,
                    centerMode: false,  // Disable center mode on mobile
                    centerPadding: '0px'  // Remove center padding on mobile
                }));
            } else {
                setSliderSettings((prevState) => ({
                    ...prevState,
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '60px'
                }));
            }
        };

        handleResize(); // Set initial size on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="medexplain-containerS">
            <div className="medexplain-header-containerS">
                <h1 className="medexplain-headerS">What people are saying about us</h1>
            </div>
            <div className="medexplain-body-containerS">
                <Slider {...sliderSettings}>
                    <div><img src={quoteOneImage} alt="Quote 1" /></div>
                    <div><img src={quoteTwoImage} alt="Quote 2" /></div>
                    <div><img src={quoteThreeImage} alt="Quote 3" /></div>
                    <div><img src={quoteFourImage} alt="Quote 4" /></div>
                    <div><img src={quoteFiveImage} alt="Quote 5" /></div>
                    <div><img src={quoteSixImage} alt="Quote 6" /></div>
                 {/*   <div><img src={quoteSevenImage} alt="Quote 7" /></div>*/}
                </Slider>
            </div>
        </div>
    );
};

export default AboutSaying;
