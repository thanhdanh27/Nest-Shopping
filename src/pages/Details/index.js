import './Details.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown,
    faCaretUp,
    faCartShopping,
    faCodeCompare,
    faHeadphones,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Sidebar from '../../components/Sidebar';

function DetailsPage() {
    const [idChoose, setIdChoose] = useState(0);
    const [valueInput, setValueInput] = useState(1);
    const sizeChart = ['50g', '60g', '80g', '100g'];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: null,
        fade: false,
        arrows: false,
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const handlePlus = () => {
        setValueInput(valueInput + 1);
    };

    const handleMinus = () => {
        if (valueInput === -1) {
            setValueInput(0);
        } else setValueInput(valueInput - 1);
    };

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="detailsPage">
            <div className="wrapBreadCumb">
                <div className="container-fluid">
                    <ul class="breadcrumb">
                        <li>
                            <Link to="#">Home</Link>
                        </li>

                        <li>
                            <Link to="#">Vegetables & tubers</Link>
                        </li>

                        <li class="active">Seeds Of Change Organic</li>
                    </ul>
                </div>
            </div>

            <div className="container-fluid detailProduct">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div style={{ padding: '0 30px 0 80px' }} className="col-7">
                                <div className="wrapZoomImg">
                                    <Slider {...settings2} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-6.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg"
                                            />
                                        </div>

                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg"
                                            />
                                        </div>
                                    </Slider>
                                </div>

                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider) => (sliderRef2 = slider)}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    className="zoomSlider"
                                    {...settings}
                                >
                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-6.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="item">
                                        <img
                                            className="w-100"
                                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg"
                                            alt=""
                                        />
                                    </div>
                                </Slider>
                            </div>
                            <div className="col-5 productInfo">
                                <h1>Seeds of Change Organic Quinoa, Brown</h1>
                                <div className="starReview">
                                    <Rating name="half-read-only" defaultValue={4.5} precision={0.5} readOnly />
                                    <span className="numReview">(32 reviews)</span>
                                </div>

                                <div className="wrapPrice">
                                    <span className="newPrice">$32</span>
                                    <span className="oldPrice">
                                        $52
                                        <h4 className="salePercent">26% Off</h4>
                                    </span>
                                </div>
                                <p className="desProduct">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia,
                                    corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum
                                    eligendi.
                                </p>
                                <div className="tableSize">
                                    <span>Size / Weight:</span>
                                    <ul>
                                        {sizeChart.map((item, index) => {
                                            return (
                                                <li
                                                    onClick={() => {
                                                        setIdChoose(index);
                                                    }}
                                                    className={idChoose === index ? 'selected' : ''}
                                                    key={index}
                                                >
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="wrapWidget">
                                    <div className="boxInput">
                                        <input type="number" value={valueInput} />
                                        <FontAwesomeIcon
                                            className="arrowUp"
                                            onClick={() => {
                                                handlePlus();
                                            }}
                                            icon={faCaretUp}
                                        />
                                        <FontAwesomeIcon
                                            className="arrowDown"
                                            onClick={() => {
                                                handleMinus();
                                            }}
                                            icon={faCaretDown}
                                        />
                                    </div>

                                    <button className="btnAddCart">
                                        <FontAwesomeIcon style={{ paddingRight: '12px' }} icon={faCartShopping} />
                                        Add to cart
                                    </button>

                                    <div className="btnWishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>

                                    <div className="btnComapre">
                                        <FontAwesomeIcon icon={faCodeCompare} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapTabs">
                            <div className="tabs">
                                <ul className="listTabs">
                                    <li
                                        className="itemTabs"
                                        onClick={() => {
                                            setActiveTab(0);
                                        }}
                                    >
                                        Description
                                    </li>
                                    <li
                                        className="itemTabs"
                                        onClick={() => {
                                            setActiveTab(1);
                                        }}
                                    >
                                        Addtional info
                                    </li>
                                    <li
                                        className="itemTabs"
                                        onClick={() => {
                                            setActiveTab(2);
                                        }}
                                    >
                                        Vendor
                                    </li>
                                    <li
                                        className="itemTabs"
                                        onClick={() => {
                                            setActiveTab(3);
                                        }}
                                    >
                                        Reviews
                                    </li>
                                </ul>

                                {activeTab === 0 && (
                                    <div className="tabContent">
                                        <div className="wrapContentTab">
                                            <p>
                                                Uninhibited carnally hired played in whimpered dear gorilla koala
                                                depending and much yikes off far quetzal goodness and from for grimaced
                                                goodness unaccountably and meadowlark near unblushingly crucial scallop
                                                tightly neurotic hungrily some and dear furiously this apart. Spluttered
                                                narrowly yikes left moth in yikes bowed this that grizzly much hello on
                                                spoon-fed that alas rethought much decently richly and wow against the
                                                frequent fluidly at formidable acceptably flapped besides and much circa
                                                far over the bucolically hey precarious goldfinch mastodon goodness
                                                gnashed a jellyfish and one however because.
                                            </p>
                                            <span className="line"></span>
                                            <p>
                                                Laconic overheard dear woodchuck wow this outrageously taut beaver hey
                                                hello far meadowlark imitatively egregiously hugged that yikes minimally
                                                unanimous pouted flirtatiously as beaver beheld above forward energetic
                                                across this jeepers beneficently cockily less a the raucously that magic
                                                upheld far so the this where crud then below after jeez enchanting
                                                drunkenly more much wow callously irrespective limpet.
                                            </p>

                                            <h3>Packaging & Delivery</h3>
                                            <span className="line"></span>
                                            <p>
                                                Less lion goodness that euphemistically robin expeditiously bluebird
                                                smugly scratched far while thus cackled sheepishly rigid after due one
                                                assenting regarding censorious while occasional or this more crane went
                                                more as this less much amid overhung anathematic because much held one
                                                exuberantly sheep goodness so where rat wry well concomitantly. Scallop
                                                or far crud plain remarkably far by thus far iguana lewd precociously
                                                and and less rattlesnake contrary caustic wow this near alas and next
                                                and pled the yikes articulate about as less cackled dalmatian in much
                                                less well jeering for the thanks blindly sentimental whimpered less
                                                across objectively fanciful grimaced wildly some wow and rose jeepers
                                                outgrew lugubrious luridly irrationally attractively dachshund.
                                            </p>

                                            <h3>Suggested Use</h3>
                                            <h4>Refrigeration not necessary.</h4>
                                            <h4>Stir before serving</h4>

                                            <h3>Other Ingredients</h3>
                                            <h4>Organic raw pecans, organic raw cashews.</h4>
                                            <h4>
                                                This butter was produced using a LTG (Low Temperature Grinding) process
                                            </h4>
                                            <h4>
                                                Made in machinery that processes tree nuts but does not process peanuts,
                                                gluten, dairy or soy
                                            </h4>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 1 && (
                                    <div className="tabContent">
                                        <div className="wrapTable">
                                            <table>
                                                <tbody>
                                                    <tr class="stand-up">
                                                        <th>Stand Up</th>
                                                        <td>
                                                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="folded-wo-wheels">
                                                        <th>Folded (w/o wheels)</th>
                                                        <td>
                                                            <p>32.5″L x 18.5″W x 16.5″H</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="folded-w-wheels">
                                                        <th>Folded (w/ wheels)</th>
                                                        <td>
                                                            <p>32.5″L x 24″W x 18.5″H</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="door-pass-through">
                                                        <th>Door Pass Through</th>
                                                        <td>
                                                            <p>24</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="frame">
                                                        <th>Frame</th>
                                                        <td>
                                                            <p>Aluminum</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="weight-wo-wheels">
                                                        <th>Weight (w/o wheels)</th>
                                                        <td>
                                                            <p>20 LBS</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="weight-capacity">
                                                        <th>Weight Capacity</th>
                                                        <td>
                                                            <p>60 LBS</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="width">
                                                        <th>Width</th>
                                                        <td>
                                                            <p>24″</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="handle-height-ground-to-handle">
                                                        <th>Handle height (ground to handle)</th>
                                                        <td>
                                                            <p>37-45″</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="wheels">
                                                        <th>Wheels</th>
                                                        <td>
                                                            <p>12″ air / wide track slick tread</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="seat-back-height">
                                                        <th>Seat back height</th>
                                                        <td>
                                                            <p>21.5″</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="head-room-inside-canopy">
                                                        <th>Head room (inside canopy)</th>
                                                        <td>
                                                            <p>25″</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="pa_color">
                                                        <th>Color</th>
                                                        <td>
                                                            <p>Black, Blue, Red, White</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="pa_size">
                                                        <th>Size</th>
                                                        <td>
                                                            <p>M, S</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className="tabContent">
                                        <div className="wrapBrand">
                                            <img
                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg"
                                                alt=""
                                            />
                                            <div className="brandInfo">
                                                <a href="#!">Noodles Co.</a>
                                                <Rating
                                                    name="half-read-only"
                                                    defaultValue={4.5}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        <div className="addressBrand">
                                            <div className="address">
                                                <FontAwesomeIcon className="iconAddress" icon={faLocationDot} />
                                                <span>Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127
                                                United States
                                            </div>

                                            <div className="contact">
                                                <FontAwesomeIcon className="iconAddress" icon={faHeadphones} />
                                                <span>Contact Seller: </span>(+91) - 540-025-553
                                            </div>
                                        </div>

                                        <div className="ratingShop">
                                            <ul>
                                                <li>
                                                    <span className="title">Rating</span>
                                                    <span className="percent">92%</span>
                                                </li>

                                                <li>
                                                    <span className="title">Ship on time</span>
                                                    <span className="percent">100%</span>
                                                </li>

                                                <li>
                                                    <span className="title">Chat response</span>
                                                    <span className="percent">82%</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p style={{ marginTop: '50px' }}>
                                            Noodles & Company is an American fast-casual restaurant that offers
                                            international and American noodle dishes and pasta in addition to soups and
                                            salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is
                                            headquartered in Broomfield, Colorado. The company went public in 2013 and
                                            recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles
                                            & Company locations across 29 states and Washington, D.C.
                                        </p>
                                    </div>
                                )}

                                {activeTab === 3 && (
                                    <div className="tabContent">
                                        <div className="wrapComment">
                                            <div className="cardComment">
                                                <div className="wrapInfoUser">
                                                    <div className="circleBox">
                                                        <img
                                                            className="imgUser"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdM8MF19RNGhPuH2eXjSvBOmCc8NLpoTYF-qQT9pS2w&s"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <a href="#!" className="nameUser">
                                                        Johnny
                                                    </a>
                                                </div>

                                                <div className="desComment">
                                                    <div className="dateAndRating">
                                                        <span className="dateTime">December 4, 2022 at 3:12 pm</span>
                                                        <Rating
                                                            name="half-read-only"
                                                            defaultValue={4.5}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="textComment">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Delectus, suscipit exercitationem accusantium obcaecati quos
                                                            voluptate nesciunt facilis itaque modi commodi dignissimos
                                                            sequi repudiandae minus ab deleniti totam officia id
                                                            incidunt?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wrapComment">
                                            <div className="cardComment">
                                                <div className="wrapInfoUser">
                                                    <div className="circleBox">
                                                        <img
                                                            className="imgUser"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdM8MF19RNGhPuH2eXjSvBOmCc8NLpoTYF-qQT9pS2w&s"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <a href="#!" className="nameUser">
                                                        Johnny
                                                    </a>
                                                </div>

                                                <div className="desComment">
                                                    <div className="dateAndRating">
                                                        <span className="dateTime">December 4, 2022 at 3:12 pm</span>
                                                        <Rating
                                                            name="half-read-only"
                                                            defaultValue={4.5}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="textComment">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Delectus, suscipit exercitationem accusantium obcaecati quos
                                                            voluptate nesciunt facilis itaque modi commodi dignissimos
                                                            sequi repudiandae minus ab deleniti totam officia id
                                                            incidunt?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wrapComment">
                                            <div className="cardComment">
                                                <div className="wrapInfoUser">
                                                    <div className="circleBox">
                                                        <img
                                                            className="imgUser"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdM8MF19RNGhPuH2eXjSvBOmCc8NLpoTYF-qQT9pS2w&s"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <a href="#!" className="nameUser">
                                                        Johnny
                                                    </a>
                                                </div>

                                                <div className="desComment">
                                                    <div className="dateAndRating">
                                                        <span className="dateTime">December 4, 2022 at 3:12 pm</span>
                                                        <Rating
                                                            name="half-read-only"
                                                            defaultValue={4.5}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="textComment">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Delectus, suscipit exercitationem accusantium obcaecati quos
                                                            voluptate nesciunt facilis itaque modi commodi dignissimos
                                                            sequi repudiandae minus ab deleniti totam officia id
                                                            incidunt?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wrapAddComment">
                                            <h3>Add a review</h3>
                                            <Rating
                                                className="ratingComment"
                                                name=""
                                                defaultValue={0}
                                                precision={0.5}
                                            />
                                            <br />
                                            <textarea
                                                rows="7"
                                                placeholder="Write review"
                                                className="commentBox"
                                            ></textarea>
                                            <br />
                                            <button className="btnAddComment">Submit review</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
