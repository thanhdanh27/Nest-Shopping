import './Footer.css';
import Icon1 from '../../assets/img/icon-1.svg';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeadphones, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import NewLetterImg from '../../assets/img//NewsLetterImg.png';
import NewsLetter from '../../components/NewsLetter/index.js';

function Footer() {
    return (
        <>
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
                                <img src={Icon1} alt="" />
                                <div className="boxInfor">
                                    <h4>Best prices & offers</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>

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
                                <img src={Icon1} alt="" />
                                <div className="boxInfor">
                                    <h4>Best prices & offers</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapBoxFooter">
                                <img src={Icon1} alt="" />
                                <div className="boxInfor">
                                    <h4>Best prices & offers</h4>
                                    <span>Orders $50 or more</span>
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

                        <div className="col">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Company</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">About us</li>
                                    <li className="footerWidgetItems">Delivery Information</li>
                                    <li className="footerWidgetItems">Privacy Policy</li>
                                    <li className="footerWidgetItems">Terms & Conditions</li>
                                    <li className="footerWidgetItems">Contact Us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Acount</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">About us</li>
                                    <li className="footerWidgetItems">Delivery Information</li>
                                    <li className="footerWidgetItems">Privacy Policy</li>
                                    <li className="footerWidgetItems">Terms & Conditions</li>
                                    <li className="footerWidgetItems">Contact Us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <div className="wrapFooterWidget">
                                <h3 className="footerWidgetHeading">Corporate</h3>
                                <ul className="listFooterWidget">
                                    <li className="footerWidgetItems">About us</li>
                                    <li className="footerWidgetItems">Delivery Information</li>
                                    <li className="footerWidgetItems">Privacy Policy</li>
                                    <li className="footerWidgetItems">Terms & Conditions</li>
                                    <li className="footerWidgetItems">Contact Us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
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
                                © 2022, <span className="textBrand">Nest</span> - HTML Ecommerce Template
                                <br />
                                All rights reserved
                            </span>
                        </div>
                        <div className="col part2">
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
