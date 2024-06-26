import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faChevronDown, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons/faBorderAll';
import { Link } from 'react-router-dom';
import Banner from '../../assets/img/banner-menu.png';
import { useEffect, useState } from 'react';

function Navbar(props) {
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        setNavData(props.data);
    }, []);
    return (
        <div className="nav">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-3 part1">
                        <button className="btnBrowse">
                            <FontAwesomeIcon icon={faBorderAll} />
                            &nbsp; Browse All Categories &nbsp;
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>

                    <div className="col-sm-7">
                        <ul className="listPage">
                            <li className="pageItem">
                                <Link to="/">Home</Link>
                            </li>
                            {navData.length !== 0 &&
                                navData.map((item, index) => {
                                    return (
                                        <li key={index} className="pageItem">
                                            <a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                                {item.cat_name} &nbsp;
                                                {item.items !== 0 && (
                                                    <FontAwesomeIcon className="iconPageItem" icon={faChevronDown} />
                                                )}
                                            </a>
                                            {item.items.length !== 0 && (
                                                <ul className="listMenuPage">
                                                    {item.items.map((item_, index) => {
                                                        return (
                                                            <li key={index} className="menuPageItem">
                                                                <a
                                                                    className="menuPageLink"
                                                                    href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name

                                                                        .replace(/\s/g, '-')
                                                                        .toLowerCase()}`}
                                                                >
                                                                    {item_.cat_name}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}

                            <li className="pageItem position-static mega">
                                <Link to="/">
                                    Mega Menu &nbsp;
                                    <FontAwesomeIcon className="iconPageItem" icon={faChevronDown} />
                                </Link>
                                <div className="dropdown_menu mega">
                                    <div className="row">
                                        {navData.length !== 0 &&
                                            navData.map((item, index) => {
                                                return (
                                                    <div key={index} className="col">
                                                        <a href={`/cat/${item.cat_name.toLowerCase()}`}>
                                                            <h4>{item.cat_name}</h4>
                                                        </a>
                                                        <ul className="mega-list">
                                                            {item.items.length !== 0 &&
                                                                item.items.map((item_, index) => {
                                                                    return (
                                                                        <li key={index} className="mega-title">
                                                                            <a
                                                                                href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name

                                                                                    .replace(/\s/g, '-')
                                                                                    .toLowerCase()}`}
                                                                            >
                                                                                {item_.cat_name}
                                                                            </a>
                                                                        </li>
                                                                    );
                                                                })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}

                                        <div className="col">
                                            <img src={Banner} alt="banner-menu"></img>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="pageItem page">
                                <Link to="/">
                                    Page &nbsp;
                                    <FontAwesomeIcon className="iconPageItem" icon={faChevronDown} />
                                </Link>
                                <ul className="listMenuPage">
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            My Account
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            Resigter
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            Forgot Password
                                        </Link>
                                    </li>
                                    <li className="menuPageItem">
                                        <Link className="menuPageLink" to="/">
                                            Reset Password
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="pageItem">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <div className="supportCenter">
                            <FontAwesomeIcon className="iconSupport" icon={faHeadset} />
                            <div className="wrapSupport">
                                <span className="numberSupport">1900 - 888</span>
                                <span className="titleSupport">24/7 Support Center</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
