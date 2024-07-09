import './Banners.css';
import Banner1 from '../../assets/img/banner1.png';
import Banner2 from '../../assets/img/banner2.png';
import Banner3 from '../../assets/img/banner3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Banners() {
    return (
        <div className="bannersSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src={Banner1} alt="banner1" className="w-100" />
                            <h4 className="bannerTitle">Everyday Fresh & Clean with Our Products</h4>
                            <button className="btnBanner">
                                Shop now
                                <FontAwesomeIcon className="iconBanner" icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box">
                            <img src={Banner2} alt="banner2" className="w-100" />
                            <h4 className="bannerTitle">Make your Breakfast Healthy and Easy</h4>
                            <button className="btnBanner">
                                Shop now
                                <FontAwesomeIcon className="iconBanner" icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>

                    <div className="col ipad-none">
                        <div className="box">
                            <img src={Banner3} alt="banner3" className="w-100" />
                            <h4 className="bannerTitle">The best Organic Products Online</h4>
                            <button className="btnBanner">
                                Shop now
                                <FontAwesomeIcon className="iconBanner" icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banners;
