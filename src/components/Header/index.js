import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import Logo from '../../assets/logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faBars, faCartShopping, faChevronDown, faGear, faSignOut, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMap, faUser } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const listIems = [
        'All Categories',
        'Milk and Dairies',
        'Wines & Alcohol',
        'Clothing & Beauty',
        'Pet Foods & Toy',
        'Fast food',
        'Baking materials',
        'Vegetables',
        'Fresh Seafood',
        'Noodles & Rice',
        'Ice cream',
    ];
    const [name, setName] = useState('All Categories');
    const [check, setCheck] = useState(false);
    const [selected, setSelected] = useState(0);
    const context = useContext(MyContext);
    const [cartItemLength, setCartItemsLength] = useState([]);
    const history = useNavigate();
    const signOut = () => {
        history('/');
        window.scroll(0, 0);
        context.signOut();
    };

    useEffect(() => {
        if (context.isLogin === 'true') {
            getDataCart('http://localhost:3000/cartItems');
        } else {
            setCartItemsLength([]);
        }
    }, [props.cartItem, props.itemCartDelete, context.isLogin]);

    const getDataCart = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setCartItemsLength(response.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const [isOpenNav, setOpenNav] = useState(false);

    const openNav = () => {
        setOpenNav(true);
        openModal();
    };
    const closeNav = () => {
        setOpenNav(false);
        closeModal();
        closeModal2();
    };

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenMenuUser, setIsOpenMenuUser] = useState(false);
    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
        setOpenNav(false);
        setIsOpenMenuUser(false);
    };
    const openModal2 = () => {
        setIsOpenModal(true);
        setIsOpenMenuUser(true);
    };
    const closeModal2 = () => {
        setIsOpenModal(false);
        setIsOpenMenuUser(false);
    };

    return (
        <>
            <header>
                <div onClick={closeModal} className={isOpenModal === true ? 'modalWrapper' : ''}></div>

                <div className="container-fluid">
                    <div className="row">
                        <div onClick={openNav} className="col-2 part1 pc-none">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="col-2 part2">
                            <a href="http://localhost:3000">
                                <img className="logo" src={Logo} alt="logo" />
                            </a>
                        </div>

                        <div className=" col-5 mobile-none">
                            <div className="headerSearch">
                                <div
                                    onClick={() => {
                                        setCheck(!check);
                                    }}
                                    className="selectDrop"
                                >
                                    <span>{name}</span>
                                    <FontAwesomeIcon className="chevronIcon" icon={faChevronDown} />
                                    {check && (
                                        <div className="selectItems">
                                            <ul className="itemList">
                                                {listIems.map((item, index) => {
                                                    return (
                                                        <li
                                                            className={selected === index ? 'active' : ''}
                                                            onClick={() => {
                                                                setSelected(index);
                                                                setName(item);
                                                            }}
                                                            key={index}
                                                        >
                                                            {item}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="search">
                                    <input type="text" placeholder="Search for items" />
                                </div>

                                <FontAwesomeIcon className="iconSearch" icon={faSearch} />
                            </div>
                        </div>

                        <div className="col-5 part3">
                            <div className="wrapperTabList">
                                <ul className="headerTabsList">
                                    <li className="headerTabsItem">
                                        <span className="numberItem">1</span>
                                        <FontAwesomeIcon className="icon" icon={faHeart} />
                                        <p className="mobile-none"> Wishlist</p>
                                    </li>

                                    <li className="headerTabsItem">
                                        <a href="/cart">
                                            <span className="numberItem">{cartItemLength.length}</span>
                                            <FontAwesomeIcon className="icon" icon={faCartShopping} />
                                            <p className="mobile-none">Cart</p>
                                        </a>
                                    </li>

                                    {context.isLogin === 'true' ? (
                                        <li onClick={openModal2} className="headerTabsItem user text-center">
                                            <FontAwesomeIcon className="icon" icon={faUser} />
                                            <p className="mobile-none">Account</p>
                                            <ul className={isOpenMenuUser === true ? 'listUser open' : 'listUser'}>
                                                <li>
                                                    <FontAwesomeIcon className="iconListUser" icon={faUser} />
                                                    My Account
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="iconListUser" icon={faMap} />
                                                    Order Tracking
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="iconListUser" icon={faTicket} />
                                                    My Voucher
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="iconListUser" icon={faHeart} />
                                                    My Wishlist
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="iconListUser" icon={faGear} />
                                                    My Setting
                                                </li>
                                                <li
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        closeModal2();
                                                        signOut();
                                                    }}
                                                >
                                                    <FontAwesomeIcon className="iconListUser" icon={faSignOut} />
                                                    Log out
                                                </li>
                                            </ul>
                                        </li>
                                    ) : (
                                        <li className="headerTabsItem mobile-none">
                                            <Link className="d-block" to="/signin">
                                                <button className="btnSigIn">Sign In</button>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar data={props.data} closeNav={closeNav} openModal={openModal} openNav={isOpenNav} />
        </>
    );
}

export default Header;
