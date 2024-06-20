import './Details.css';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Product from '../../components/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCodeCompare, faHeadphones, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import QuantityBox from '../../components/QuantityBox';

//import Sidebar from '../../components/Sidebar';

function DetailsPage(props) {
    const [idChoose, setIdChoose] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    const [activeTab, setActiveTab] = useState(0);

    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState([]);
    const [productReviews, setProductReviews] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setProductReviews(props.reviews);
        props.data.length !== 0 &&
            props.data.forEach((item) => {
                item.items.length !== 0 &&
                    item.items.forEach((item_) => {
                        item_.products.length !== 0 &&
                            item_.products.forEach((currentItem) => {
                                if (currentItem.id === parseInt(id)) {
                                    setCurrentProduct(currentItem);
                                }
                            });
                    });
            });
    }, [id]);

    const [nameBreadCrumb, setNameBreadCrumb] = useState([]);
    useEffect(() => {
        const objName = {};
        props.data.length !== 0 &&
            props.data.forEach((item) => {
                item.items.forEach((item_) => {
                    item_.products.forEach((item__) => {
                        if (item__.id === +id) {
                            objName.catName = item.cat_name;
                            objName.childName = item_.cat_name;
                            objName.nameProduct = item__.productName;
                        }
                    });
                });
            });
        setNameBreadCrumb(objName);
    }, []);

    const [relatedProduct, setRelatedProduct] = useState([]);
    const arrRelatedProducts = [];
    useEffect(() => {
        props.data.length !== 0 &&
            props.data.forEach((item) => {
                if (item.cat_name === nameBreadCrumb.catName) {
                    item.items.forEach((item_) => {
                        item_.products.forEach((product) => {
                            arrRelatedProducts.push(product);
                        });
                    });
                }
            });
        setRelatedProduct(arrRelatedProducts);
    }, [nameBreadCrumb.catName]);

    const [fieldReview, setFieldReview] = useState({
        productId: 0,
        name: 'danh',
        rating: 0.0,
        comment: '',
        date: '',
    });
    const onInputComment = (name, value) => {
        setFieldReview((prev) => ({
            ...prev,
            productId: parseInt(id),
            [name]: value,
            date: new Date().toLocaleString(),
        }));
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/productReviews', fieldReview);
        } catch (err) {
            console.log(err.message);
        }

        showReviews();
    };

    const arr_reviews = [];
    const showReviews = async () => {
        try {
            await axios.get('http://localhost:3000/productReviews').then((response) => {
                if (response.data.length !== 0) {
                    response.data.forEach((item) => {
                        arr_reviews.push(item);
                    });
                }
            });
        } catch (err) {
            console.log(err.message);
        }

        if (arr_reviews.length !== 0) {
            setProductReviews(arr_reviews);
        }
    };

    return (
        <div className="detailsPage">
            <div className="wrapBreadCumb">
                <div className="container-fluid">
                    <ul class="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <a
                                href={`/cat/${
                                    nameBreadCrumb.catName !== undefined && nameBreadCrumb.catName.toLowerCase()
                                }`}
                            >
                                {nameBreadCrumb.catName}
                            </a>
                        </li>

                        <li>
                            <a
                                href={`/cat/${
                                    nameBreadCrumb.catName !== undefined && nameBreadCrumb.catName.toLowerCase()
                                }/${
                                    nameBreadCrumb.childName !== undefined &&
                                    nameBreadCrumb.childName.replace(/\s/g, '-').toLowerCase()
                                }`}
                            >
                                {nameBreadCrumb.childName}
                            </a>
                        </li>
                        <li className="active">{nameBreadCrumb.nameProduct}</li>
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
                                        {currentProduct.productImages !== undefined &&
                                            currentProduct.productImages.map((item, index) => {
                                                return (
                                                    <div key={index} className="item">
                                                        <InnerImageZoom zoomType="hover" zoomScale={1} src={item} />
                                                    </div>
                                                );
                                            })}
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
                                    {currentProduct.productImages !== undefined &&
                                        currentProduct.productImages.map((item, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <img className="w-100" src={item} alt="" />
                                                </div>
                                            );
                                        })}
                                </Slider>
                            </div>
                            <div className="col-5 productInfo">
                                <h1>{currentProduct.productName}</h1>
                                <div className="starReview">
                                    <Rating
                                        name="half-read-only"
                                        value={parseFloat(currentProduct.rating)}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <span className="numReview">{`(${productReviews.length} reviews)`}</span>
                                </div>

                                <div className="wrapPrices">
                                    <span className="newPrice">${currentProduct.price}</span>
                                    <span className="oldPrice">
                                        ${currentProduct.oldPrice}
                                        <h4 className="salePercent">{currentProduct.discount}% Off</h4>
                                    </span>
                                </div>
                                <p className="desProduct">{currentProduct.description}</p>
                                <div className="tableSize">
                                    <span>Size / Weight:</span>
                                    <ul>
                                        {currentProduct.weight !== undefined &&
                                            currentProduct.weight.length !== 0 &&
                                            currentProduct.weight.map((item, index) => {
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

                                        {currentProduct.RAM !== undefined &&
                                            currentProduct.RAM.length !== 0 &&
                                            currentProduct.RAM.map((item, index) => {
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

                                        {currentProduct.SIZE !== undefined &&
                                            currentProduct.SIZE.length !== 0 &&
                                            currentProduct.SIZE.map((item, index) => {
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
                                    <QuantityBox />

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
                                        Reviews ({productReviews.length})
                                    </li>
                                </ul>

                                {activeTab === 0 && (
                                    <div className="tabContent">
                                        <div className="wrapContentTab">
                                            <p>{currentProduct.description}</p>
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
                                        {productReviews.length !== 0 &&
                                            productReviews.map((item) => {
                                                if (item.productId === parseInt(id)) {
                                                    return (
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
                                                                        {item.name}
                                                                    </a>
                                                                </div>
                                                                <div className="desComment">
                                                                    <div className="dateAndRating">
                                                                        <span className="dateTime">{item.date}</span>
                                                                        <Rating
                                                                            name="half-read-only"
                                                                            value={parseFloat(item.rating)}
                                                                            precision={0.5}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                    <div className="textComment">
                                                                        <p>{item.comment}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })}

                                        <div className="wrapAddComment">
                                            <h3>Add a review</h3>
                                            <Rating
                                                className="ratingComment"
                                                onChange={(e, newValue) => {
                                                    onInputComment(e.target.name, newValue);
                                                }}
                                                name="rating"
                                                defaultValue={0}
                                                precision={0.5}
                                            />
                                            <br />
                                            <textarea
                                                onBlur={(e) => {
                                                    onInputComment(e.target.name, e.target.value);
                                                }}
                                                name="comment"
                                                rows="7"
                                                placeholder="Write review"
                                                className="commentBox"
                                            ></textarea>
                                            <br />
                                            <button
                                                onClick={handleSubmitReview}
                                                type="submit"
                                                className="btnAddComment"
                                            >
                                                Submit review
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-3">{/* <Sidebar data={productData} /> */}</div>
                    <div className="productRelated">
                        <h2>Related Product</h2>
                        <Slider {...settings1}>
                            {relatedProduct.length !== 0 &&
                                relatedProduct.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <Product itemdata={item} />
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
