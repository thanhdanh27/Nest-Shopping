import './NotFound.css';
import NotFoundImg from '../../assets/img/page-404.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
function NotFound() {
    window.scroll(0, 0);

    return (
        <div className="notFound">
            <div className="container-fluid">
                <div className="box">
                    <img src={NotFoundImg} alt="" />
                    <h1>Page Not Found</h1>
                    <p>
                        The link you clicked may be broken or the page may have been removed. Visit the
                        <span> Homepage</span> or <span>Contact</span> us about the problem
                    </p>
                    <div className="wrapInput">
                        <input type="text" placeholder="Search..." />
                        <FontAwesomeIcon className="iconSearch" icon={faSearch} />
                    </div>

                    <a href="/" className="btBackHome">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Back to HomePage</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
