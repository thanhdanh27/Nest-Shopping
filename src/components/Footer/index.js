import './Footer.css';
import Icon1 from '../../assets/img/icon-1.svg';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp,
    faClock,
    faHeadphones,
    faLocationDot,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import NewLetterImg from '../../assets/img//NewsLetterImg.png';
import NewsLetter from '../../components/NewsLetter/index.js';
import { useState, useEffect } from 'react';

function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {scrollY > 1200 && window.innerWidth > 740 && (
                <div className="scrollTop">
                    <span className="circle">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                    </span>
                </div>
            )}
            {scrollY > 1200 && window.innerWidth < 740 && (
                <div className="scrollTop">
                    <span className="circle">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowUp} />
                        </a>
                    </span>
                </div>
            )}
            <div className="homeProducts">
                <div className="container-fluid">
                    <div className="bgUrl">
                        <div className="wrapNewsLetter">
                            <div className="info">
                                <NewsLetter />
                            </div>

                            <div className="img">
                                <img className="w-100" src={NewLetterImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapFooter">
                <div className="boxFooter">
                    <div className="row">
                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img src={Icon1} alt="" />
                                <div className="boxInfor">
                                    <h4>Best prices & offers</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img
                                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                                    alt=""
                                />
                                <div className="boxInfor">
                                    <h4>Free delivery</h4>
                                    <span>24/7 amazing services</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img
                                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                                    alt=""
                                />
                                <div className="boxInfor">
                                    <h4>Great daily deal</h4>
                                    <span>When you sign up</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img
                                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
                                    alt=""
                                />
                                <div className="boxInfor">
                                    <h4>Wide assortment</h4>
                                    <span>Mega Discounts</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img
                                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                                    alt=""
                                />
                                <div className="boxInfor">
                                    <h4>Safe delivery</h4>
                                    <span>Within 30 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerMid">
                    <div className="row">
                        <div className="col">
                            <div className="wrapFooterMid">
                                <Link to="/home">
                                    <img src={Logo} alt="" />
                                </Link>
                                <h4>Awesome grocery store website template</h4>
                                <div className="infoMidFooter">
                                    <div className="wrapInfoMidFooter">
                                        <FontAwesomeIcon className="iconFooter" icon={faLocationDot} />
                                        <h4 className="address">
                                            <span>Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127
                                        </h4>
                                    </div>

                                    <div className="wrapInfoMidFooter">
                                        <FontAwesomeIcon className="iconFooter" icon={faHeadphones} />
                                        <h4 className="address">
                                            <span>Call Us:</span> (+91) - 540-025-124553
                                        </h4>
                                    </div>

                                    <div className="wrapInfoMidFooter">
                                        <FontAwesomeIcon className="iconFooter" icon={faPaperPlane} />
                                        <h4 className="address">
                                            <span>Email:</span> sale@Nest.com
                                        </h4>
                                    </div>

                                    <div className="wrapInfoMidFooter">
                                        <FontAwesomeIcon className="iconFooter" icon={faClock} />
                                        <h4 className="address">
                                            <span>Hours:</span> 10:00 - 18:00, Mon - Sat
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col halfCol">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Company</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">About us</li>
                                    <li className="footerWidgetItems">Delivery Information</li>
                                    <li className="footerWidgetItems">Privacy Policy</li>
                                    <li className="footerWidgetItems">Terms & Conditions</li>
                                    <li className="footerWidgetItems">Contact Us</li>
                                    <li className="footerWidgetItems">Support Center</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col halfCol">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Account</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">Sign in</li>
                                    <li className="footerWidgetItems">View Cart</li>
                                    <li className="footerWidgetItems">My Wishlist</li>
                                    <li className="footerWidgetItems">Track My Order</li>
                                    <li className="footerWidgetItems">Help Ticket</li>
                                    <li className="footerWidgetItems">Compare Products</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col halfCol">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Corporate</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">Become A Vendor</li>
                                    <li className="footerWidgetItems">Affilate Programs</li>
                                    <li className="footerWidgetItems">Farm Careers</li>
                                    <li className="footerWidgetItems">Our Suppliers</li>
                                    <li className="footerWidgetItems">Accessibility</li>
                                    <li className="footerWidgetItems">Promotions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col halfCol">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Popular</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">About us</li>
                                    <li className="footerWidgetItems">Delivery Information</li>
                                    <li className="footerWidgetItems">Privacy Policy</li>
                                    <li className="footerWidgetItems">Terms & Conditions</li>
                                    <li className="footerWidgetItems">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerEnd">
                    <div className="row">
                        <div className="col part1">
                            <span className="footerOrgan">
                                © 2024, <span className="textBrand">Nest</span> - Ecommerce
                                <br />
                                All rights reserved
                            </span>
                        </div>
                        <div className="col part2 mobile-none">
                            <div className="contact">
                                <div className="contactNum">
                                    <FontAwesomeIcon className="iconContact" icon={faPhone} />
                                    <div className="infoContact">
                                        <h3>1900 - 6666</h3>
                                        <span>Working 8:00 - 22:00</span>
                                    </div>
                                </div>
                                <div className="contactNum">
                                    <FontAwesomeIcon className="iconContact" icon={faPhone} />
                                    <div className="infoContact">
                                        <h3>1900 - 6666</h3>
                                        <span>Working 8:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col part3">
                            <div className="social">
                                <span>Follow Us</span>
                                <div className="wrapSocial">
                                    <div className="circleBox">
                                        <FontAwesomeIcon className="iconSocial" icon={faFacebook} />
                                    </div>

                                    <div className="circleBox">
                                        <FontAwesomeIcon className="iconSocial" icon={faTwitter} />
                                    </div>

                                    <div className="circleBox">
                                        <FontAwesomeIcon className="iconSocial" icon={faInstagram} />
                                    </div>

                                    <div className="circleBox">
                                        <FontAwesomeIcon className="iconSocial" icon={faPinterest} />
                                    </div>

                                    <div className="circleBox">
                                        <FontAwesomeIcon className="iconSocial" icon={faYoutube} />
                                    </div>
                                </div>
                                <h4 className="saleUpText">Up to 15% discount on your first subscribe</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
