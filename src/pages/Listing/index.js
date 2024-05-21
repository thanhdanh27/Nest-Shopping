import { Link, useParams } from 'react-router-dom';
import './Listing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faHome, faTable } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/Product';
import { useEffect, useState } from 'react';

function Listing(props) {
    const shortByNumber = ['50', '100', '150', '200', 'All'];
    const sortByFeature = ['Featured', 'Price: High to low', 'Price: Low to high', 'Release date', 'Avg rating'];
    const [number, setNumber] = useState('50');
    const [feature, setFeature] = useState('Featured');
    const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(0);
    const [selected1, setSelected1] = useState(false);
    const [checked1, setChecked1] = useState(0);

    const [productData, setProductData] = useState([]);
    const [productAll, setProductAll] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        setProductData(props.data);
    }, []);

    const arrAllProducts = [];
    useEffect(() => {
        if (props.single === true) {
            productData.length !== 0 &&
                productData.forEach((item) => {
                    if (item.cat_name.toLowerCase() === id) {
                        item.items.length !== 0 &&
                            item.items.forEach((item_) => {
                                item_.products.length !== 0 &&
                                    item_.products.forEach((item__) => {
                                        arrAllProducts.push(item__);
                                    });
                            });
                    }
                });
            setProductAll(arrAllProducts);
        } else {
            productData.length !== 0 &&
                productData.forEach((item) => {
                    item.items.length !== 0 &&
                        item.items.forEach((item_) => {
                            if (item_.cat_name.replace(/\s/g, '-').toLowerCase() === id) {
                                item_.products.length !== 0 &&
                                    item_.products.forEach((item__) => {
                                        arrAllProducts.push(item__);
                                    });
                            }
                        });
                });
            setProductAll(arrAllProducts);
        }
    }, [productData]);
    return (
        <>
            <div className="wrapListing">
                <div className="container-fluid">
                    <div className="archive-headerss">
                        <div className="row">
                            <div className="col-3">
                                <h3 className="itemTitle">Snake</h3>
                                <div className="breadcrumb">
                                    <ul className="listBreadCrumb">
                                        <li>
                                            <Link className="home" to="">
                                                <FontAwesomeIcon className="homeIcon" icon={faHome} />
                                                Home
                                            </Link>
                                        </li>
                                        <span className="d-flex align-items-center">
                                            <FontAwesomeIcon className="chevronRightIcon" icon={faChevronRight} />
                                        </span>
                                        <li>
                                            <Link to="">Shop</Link>
                                        </li>
                                        <span className="d-flex align-items-center">
                                            <FontAwesomeIcon className="chevronRightIcon" icon={faChevronRight} />
                                        </span>
                                        <li>
                                            <Link to="">Snake</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="listingData">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>

                    <div className="col-9">
                        <div className="product-fillter d-flex">
                            <p className="total-product">
                                We found <span>{productAll.length}</span> items for you!
                            </p>

                            <div className="sort-product d-flex">
                                <div
                                    onClick={() => {
                                        setSelected(!selected);
                                    }}
                                    className="sort-by-num"
                                >
                                    <FontAwesomeIcon icon={faTable} />
                                    <span>Show: {number}</span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    {selected && (
                                        <div className="dropdown">
                                            <ul>
                                                {shortByNumber.map((item, index) => {
                                                    return (
                                                        <li
                                                            onClick={() => {
                                                                setNumber(item);
                                                                setSelected(false);
                                                                setChecked(index);
                                                            }}
                                                            key={index}
                                                        >
                                                            {checked === index && (
                                                                <FontAwesomeIcon
                                                                    className="checkedIcon"
                                                                    icon={faChevronDown}
                                                                />
                                                            )}
                                                            <span>{item}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div
                                    onClick={() => {
                                        setSelected1(!selected1);
                                    }}
                                    className="sort-by-feature"
                                >
                                    <FontAwesomeIcon icon={faTable} />
                                    <span>Show: {feature}</span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                    {selected1 && (
                                        <div className="dropdown">
                                            <ul>
                                                {sortByFeature.map((item, index) => {
                                                    return (
                                                        <li
                                                            onClick={() => {
                                                                setFeature(item);
                                                                setSelected1(false);
                                                                setChecked1(index);
                                                            }}
                                                            key={index}
                                                        >
                                                            {checked1 === index && (
                                                                <FontAwesomeIcon
                                                                    className="checkedIcon"
                                                                    icon={faChevronDown}
                                                                />
                                                            )}
                                                            <span>{item}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="productRow">
                            {productAll.length !== 0 &&
                                productAll.map((item, index) => {
                                    return (
                                        <div key={index} className="productItem">
                                            <Product itemdata={item} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;
