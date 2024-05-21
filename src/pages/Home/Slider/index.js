import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import Slider1 from '../../../assets/img/slider1.png';
import Slider2 from '../../../assets/img/slider2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
    };
    return (
        <div className="container-fluid homeSlider">
            <Slider className="mainSlider" {...settings}>
                <div className="item">
                    <img className="imgSlider" src={Slider1} alt="slider1"></img>
                    <div className="wrapInfoSlider">
                        <div className="sliderHeading">Dont miss amzing grocery deals</div>
                        <span className="sliderTitle">Sign up for the daily newsletter</span>
                        <div className="inputSlider">
                            <FontAwesomeIcon className="iconInput" icon={faPaperPlane} />
                            <input type="text" placeholder="Your email address" />
                            <button className="btnSlider">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="imgSlider" src={Slider2} alt="slider2"></img>
                    <div className="wrapInfoSlider">
                        <div className="sliderHeading">Fresh Vegetables Big discount</div>
                        <span className="sliderTitle">Save up to 50% off on your first order</span>
                        <div className="inputSlider">
                            <FontAwesomeIcon className="iconInput" icon={faPaperPlane} />
                            <input type="text" placeholder="Your email address" />
                            <button type="submit" className="btnSlider">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
