import './NewsLetter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function NewsLetter() {
    return (
        <div className="wrapInfoSlider newsLetter">
            <div className="newsLetterTitle">
                Stay home & get your daily
                <br />
                needs from our shop
            </div>
            <span className="newsLetterDes">
                Start You'r Daily Shopping with <span className="newsLetterBrand">Nest Mart</span>
            </span>
            <div className="inputSlider">
                <FontAwesomeIcon className="iconInput" icon={faPaperPlane} />
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="btnSlider">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default NewsLetter;
