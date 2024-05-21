import Banners from '../../components/Banners/index.js';
import CatSlider from '../../components/CatSlider/index.js';
import SimpleSlider from './Slider/index.js';
import './Home.css';
import Product from '../../components/Product/index.js';
import Banner4 from '../../assets/img/banner4.png';
import Slider from 'react-slick';
import TopProducts from './TopProdcuts/index.js';
import { useEffect, useState } from 'react';

function Home(props) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const [productData, setProductData] = useState(props.data);
    const [catArrays, setCatArrays] = useState([]);
    const [active, setActive] = useState(0);
    const [activeTab, setActiveTab] = useState();
    const [activeProductData, setActiveProductData] = useState([]);
    const catArr = [];
    const [bestSale, setBestSale] = useState([]);

    useEffect(() => {
        productData.length !== 0 &&
            productData.forEach((item) => {
                item.items !== 0 &&
                    item.items.forEach((item_) => {
                        catArr.push(item_.cat_name);
                    });
            });
        // tránh trùng phần tử trong mảng
        const list = catArr.filter((item, index) => {
            return catArr.indexOf(item) === index;
        });
        setCatArrays(list);
        setActiveTab(list[0]);
    }, []);

    useEffect(() => {
        productData.length !== 0 &&
            productData.forEach((item) => {
                item.items.length !== 0 &&
                    item.items.forEach((item_) => {
                        if (item_.cat_name === activeTab) {
                            setActiveProductData(item_.products);
                        }
                    });
            });
    }, [activeTab]);

    const arrBestSale = [];
    useEffect(() => {
        productData.length !== 0 &&
            productData.forEach((item) => {
                if (item.cat_name === 'groceries') {
                    item.items.length !== 0 &&
                        item.items.forEach((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.forEach((product) => {
                                    arrBestSale.push(product);
                                });
                        });
                }
            });
        setBestSale(arrBestSale);
    }, []);

    return (
        <>
            <SimpleSlider />
            <CatSlider data={bestSale} />
            <Banners />

            <div className="homeProducts">
                <div className="container-fluid">
                    <div className="wrapHomeProduct">
                        <h2>Popular Products</h2>
                        <ul className="list-filterTab">
                            {catArrays.length !== 0 &&
                                catArrays.map((item, index) => {
                                    return (
                                        <li
                                            onClick={() => {
                                                setActive(index);
                                                setActiveTab(item);
                                            }}
                                            key={index}
                                            className={`list-item ${active === index ? 'actived' : ''}`}
                                        >
                                            <a href="#!">{item}</a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>

                <div className="productRow">
                    {activeProductData.length !== 0 &&
                        activeProductData.map((item, index) => {
                            return (
                                <div key={index} className="productItem">
                                    <Product itemdata={item} />
                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="homeProducts bestSale">
                <div className="container-fluid">
                    <div className="wrapHomeProduct">
                        <h2>Daily Best Sells</h2>
                        <ul className="list-filterTab">
                            <li className="list-item">
                                <a href="#!">Feature</a>
                            </li>
                            <li className="list-item">
                                <a href="#!">Popular</a>
                            </li>
                            <li className="list-item">
                                <a href="#!">New Added</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <img className="banner4" src={Banner4} alt="banner4" />
                    </div>

                    <div className="col-9">
                        <Slider className="mainSlider" {...settings}>
                            {bestSale.length !== 0 &&
                                bestSale.map((product, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <Product itemdata={product} />
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="homeProducts topProducts">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <TopProducts title="Top Selling" />
                        </div>

                        <div className="col">
                            <TopProducts title="Trending Products" />
                        </div>

                        <div className="col">
                            <TopProducts title="Recently added" />
                        </div>

                        <div className="col">
                            <TopProducts title="Top Rated" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
