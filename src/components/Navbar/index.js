import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faChevronDown, faHeadset, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons/faBorderAll';
import { Link } from 'react-router-dom';
import Banner from '../../assets/img/banner-menu.png';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';
import Logo from '../../assets/logo.svg';

function Navbar(props) {
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        setNavData(props.data);
    }, []);
    const [openNav, setOpenNav] = useState();
    useEffect(() => {
        setOpenNav(props.openNav);
    }, [props.openNav]);
    const closeNav = () => {
        props.closeNav();
        setOpenNav(false);
    };

    const [IsOpenListPage, setIsOpenListPage] = useState([false, 0]);
    const openListPage = (index) => {
        setIsOpenListPage((prevState) => {
            const newState = [...prevState];
            newState[0] = !IsOpenListPage[0];
            newState[1] = index;
            return newState;
        });
    };

    const context = useContext(MyContext);

    return (
        <div className={openNav === true ? 'nav open' : 'nav'}>
            <div className="container-fluid">
                <div className="row position-relative">
                    <div onClick={closeNav} className="btnClose pc-none">
                        <img className="logo" src={Logo} alt="logo" />
                        <span className="circle">
                            <FontAwesomeIcon className={openNav === false ? 'iconClose' : ''} icon={faXmark} />
                        </span>
                    </div>
                    <div className="col-sm-3 part1 mobile-none">
                        <button className="btnBrowse">
                            <FontAwesomeIcon icon={faBorderAll} />
                            &nbsp; Browse All Categories &nbsp;
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>

                    <div className="col-sm-7">
                        <div className="pc-none boxSearch">
                            <input className="inputSearch" placeholder="Search for items..." type="text" />
                            <button className="btnSearch">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <ul className="listPage">
                            <li className="pageItem">
                                <a href="/Nest-Shopping">Home</a>
                            </li>
                            {navData.length !== 0 &&
                                navData.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                window.innerWidth < 740 ? 'pageItem ResMobile ' : 'pageItem ResPc'
                                            }
                                        >
                                            <Link to={`/Nest-Shopping/#/cat/${item.cat_name.toLowerCase()}`}>
                                                <span>{item.cat_name}</span> &nbsp;
                                            </Link>
                                            {item.items !== 0 && (
                                                <FontAwesomeIcon
                                                    onClick={() => {
                                                        openListPage(index);
                                                    }}
                                                    className="iconPageItem"
                                                    icon={faChevronDown}
                                                />
                                            )}
                                            {item.items.length !== 0 && (
                                                <ul
                                                    className={
                                                        IsOpenListPage[0] === true && IsOpenListPage[1] === index
                                                            ? 'listMenuPage d-block'
                                                            : 'listMenuPage'
                                                    }
                                                >
                                                    {item.items.map((item_, index) => {
                                                        return (
                                                            <li key={index} className="menuPageItem">
                                                                <a
                                                                    className="menuPageLink"
                                                                    href={`/Nest-Shopping/#/cat/${item.cat_name.toLowerCase()}/${item_.cat_name

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
                                <Link to="/">Mega Menu &nbsp;</Link>
                                <FontAwesomeIcon className="iconPageItem" icon={faChevronDown} />
                                <div className="dropdown_menu mega">
                                    <div className="row">
                                        {navData.length !== 0 &&
                                            navData.map((item, index) => {
                                                return (
                                                    <div key={index} className="col">
                                                        <a href={`/Nest-Shopping/#/cat/${item.cat_name.toLowerCase()}`}>
                                                            <h4>{item.cat_name}</h4>
                                                        </a>
                                                        <ul className="mega-list">
                                                            {item.items.length !== 0 &&
                                                                item.items.map((item_, index) => {
                                                                    return (
                                                                        <li key={index} className="mega-title">
                                                                            <a
                                                                                href={`/Nest-Shopping/#/cat/${item.cat_name.toLowerCase()}/${item_.cat_name

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

                            <li
                                className={window.innerWidth < 740 ? 'pageItem ResMobile page ' : 'pageItem ResPc page'}
                            >
                                <Link to="/">
                                    <span onClick={closeNav}>Pages</span> &nbsp;
                                </Link>
                                <FontAwesomeIcon
                                    onClick={() => {
                                        openListPage(5);
                                    }}
                                    className="iconPageItem"
                                    icon={faChevronDown}
                                />
                                <ul
                                    className={
                                        IsOpenListPage[0] === true && IsOpenListPage[1] === 5
                                            ? 'listMenuPage d-block'
                                            : 'listMenuPage'
                                    }
                                >
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
                                    <li className="menuPageItem">
                                        <a className="menuPageLink" href="/Nest-Shopping/#/*">
                                            404 Error
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="pageItem">
                                <Link to="/">Contact</Link>
                            </li>
                            {context.isLogin !== 'true' && (
                                <li onClick={closeNav} className="pageItem pc-none">
                                    <Link className="d-block w-100" to="/signin">
                                        <button className="btnSigIn">Sign In</button>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="col-sm-2 mobile-none">
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
