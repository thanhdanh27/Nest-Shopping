import './Product.css';
import Rating from '@mui/material/Rating';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Product(props) {
    const [productData, setProductData] = useState();
    useEffect(() => {
        setProductData(props.itemdata);
    }, [props.itemdata]);

    return (
        <>
            {productData !== undefined && (
                <div className="productThumb">
                    <div className="wrapProductImg">
                        <img className="productImg" src={productData.catImg + '?im=Resize=(420,420)'} alt="snack" />
                        <div className="productOverplay">
                            <ul>
                                <li>
                                    <a href="#!">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </a>
                                    <span class="tooltiptext">Add to wishlist</span>
                                </li>

                                <li>
                                    <a href="#!">
                                        <FontAwesomeIcon icon={faCodeCompare} />
                                    </a>
                                    <span class="tooltiptext">Compare</span>
                                </li>

                                <li>
                                    <a href="#!">
                                        <FontAwesomeIcon icon={faEye} />
                                    </a>
                                    <span class="tooltiptext">Quick view</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="productInfo">
                        <span className="productType">{productData.brand}</span>
                        <h4 className="productTitle">{productData.productName}</h4>
                        <Rating name="half-read-only" value={parseFloat(productData.rating)} precision={0.5} readOnly />
                        <span className="productBrand d-block">
                            By <a href="#!">{productData.brand}</a>
                        </span>

                        <div className="productPrice">
                            <div className="wrapPrice">
                                <span className="newPrice">${productData.price}</span>
                                <span className="oldPrice">${productData.oldPrice}</span>
                            </div>

                            <button className="btnAddProduct d-flex">
                                <ShoppingCartOutlined className="iconAddProduct" />
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
