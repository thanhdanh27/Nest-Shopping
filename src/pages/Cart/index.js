import { Link } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import QuantityBox from '../../components/QuantityBox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import data from '../../data/data.js';

function Cart(props) {
    const [cartItem, setCartItem] = useState([]);
    const context = useContext(MyContext);
    const history = useNavigate();
    useEffect(() => {
        if (context.isLogin === 'true') {
            // getDataCart('http://localhost:3000/cartItems');
            setCartItem(data.cartItems);
        } else {
            history('/');
        }
    }, [props.itemCartDelete, context.isLogin]);

    const getDataCart = async (url) => {
        try {
            await axios.get(url).then((respone) => {
                setCartItem(respone.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteItemCart = (id) => {
        context.deleteItemCart(id);
    };

    const emptyItemCart = async () => {
        try {
            // Sử dụng Promise.all để đợi tất cả các yêu cầu xóa hoàn tất
            if (cartItem.length !== 0) {
                await Promise.all(cartItem.map((item) => axios.delete(`http://localhost:3000/cartItems/${item.id}`)));
            }

            // Sau khi xóa xong, gọi lại hàm getDataCart để lấy dữ liệu mới
            getDataCart('http://localhost:3000/cartItems');
            context.emptyItemCart();
        } catch (err) {
            console.log(err.message);
        }
    };

    const updateCart = (item) => {
        setCartItem(item);
    };

    return (
        <div className="wrapCart">
            <div className="wrapBreadCumb">
                <div className="container-fluid">
                    <ul class="breadcrumb">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="active">Shop</li>

                        <li className="active">Cart</li>
                    </ul>
                </div>
            </div>

            <div className="manageCart">
                <h1>Your Cart</h1>
                <div className="titleManageCart d-flex col-8">
                    <p>
                        There are <span>3</span> products in your cart
                    </p>

                    <p
                        onClick={() => {
                            emptyItemCart();
                        }}
                    >
                        <FontAwesomeIcon style={{ marginRight: '7px' }} icon={faTrash} />
                        Clear Cart
                    </p>
                </div>

                <div className="row">
                    <div className="col-8">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }} />
                                    </th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItem.length !== 0 &&
                                    cartItem.map((item, index) => {
                                        return (
                                            <tr>
                                                <td className="tdCheckBox">
                                                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }} />
                                                </td>
                                                <td className="tdProduct">
                                                    <div className="wrapImgCart">
                                                        <img src={item.catImg} />
                                                    </div>
                                                    <span>
                                                        <a href="#!">{item.productName}</a>
                                                        <Rating
                                                            name="half-read-only"
                                                            value={item.rating}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </span>
                                                </td>
                                                <td className="tdUnitPrice">
                                                    ${parseInt(item.price.replace(',', ''))}
                                                </td>
                                                <td>
                                                    <QuantityBox
                                                        index={index}
                                                        cartItem={cartItem}
                                                        updateCart={updateCart}
                                                    />
                                                </td>
                                                <td className="tdTotalPrice">
                                                    ${parseInt(item.price.replace(',', '')) * item.quantity}
                                                </td>
                                                <td className="tdRemove">
                                                    <FontAwesomeIcon
                                                        onClick={() => {
                                                            deleteItemCart(item.id);
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                        icon={faTrash}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <div className="wrapCardCheckOut">
                            <div className="cardCheckOut">
                                <div className="cardContent d-flex">
                                    <span>Subtotal</span>
                                    <span>
                                        $
                                        {cartItem.length !== 0 &&
                                            cartItem
                                                .map((item) => {
                                                    return parseInt(item.price.replace(',', '')) * item.quantity;
                                                })
                                                .reduce((total, value) => total + value, 0)}
                                    </span>
                                </div>

                                <div className="cardContent d-flex">
                                    <span>Shipping</span>
                                    <span className="word">Free</span>
                                </div>

                                <div className="cardContent d-flex">
                                    <span>Estimate for</span>
                                    <span className="word">VietNam</span>
                                </div>

                                <div className="cardContent d-flex">
                                    <span>Total</span>
                                    <span>
                                        $
                                        {cartItem.length !== 0 &&
                                            cartItem
                                                .map((item) => {
                                                    return parseInt(item.price.replace(',', '')) * item.quantity;
                                                })
                                                .reduce((total, value) => total + value, 0)}
                                    </span>
                                </div>

                                <div className="btnCheckout">
                                    <span>Proceed To Checkout</span>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
