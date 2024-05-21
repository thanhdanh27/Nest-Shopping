import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import Logo from '../../assets/logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCartShopping, faChevronDown, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faMap, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import Navbar from '../Navbar';

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

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <img className="logo" src={Logo} alt="logo" />
                        </div>

                        <div className="col-sm-5">
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

                        <div className="col-sm-5">
                            <div className="wrapperTabList">
                                <ul className="headerTabsList">
                                    <li className="headerTabsItem">
                                        <span className="numberItem">1</span>
                                        <FontAwesomeIcon className="icon" icon={faHeart} />
                                        Wishlist
                                    </li>

                                    <li className="headerTabsItem">
                                        <span className="numberItem">1</span>
                                        <FontAwesomeIcon className="icon" icon={faCartShopping} />
                                        Cart
                                    </li>

                                    <li className="headerTabsItem user">
                                        <FontAwesomeIcon className="icon" icon={faUser} />
                                        Account
                                        <ul className="listUser">
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
                                            <li>
                                                <FontAwesomeIcon className="iconListUser" icon={faSignOut} />
                                                Log out
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar data={props.data} />
        </>
    );
}

export default Header;
