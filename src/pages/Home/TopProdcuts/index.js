import './TopProducts.css';
import Rating from '@mui/material/Rating';
import TopProductImg1 from '../../../assets/img/TopProduct.jpg';
import TopProductImg2 from '../../../assets/img/TopProduct2.jpg';
import TopProductImg3 from '../../../assets/img/TopProduct3.jpg';

function TopProducts(props) {
    return (
        <div className="wrapTopProduct">
            <h1 className="topProductTitle">{props.title}</h1>

            <div className="itemTopProduct">
                <div className="itemTopProductImg">
                    <img src={TopProductImg1} alt="" />
                </div>

                <div className="itemTopProductInfo">
                    <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
                    <Rating name="half-read-only" defaultValue={3.5} precision={0.5} readOnly />
                    <span className="newPrice">
                        $32.85 <span className="oldPrice">$33.8</span>
                    </span>
                </div>
            </div>

            <div className="itemTopProduct">
                <div className="itemTopProductImg">
                    <img src={TopProductImg2} alt="" />
                </div>

                <div className="itemTopProductInfo">
                    <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
                    <Rating name="half-read-only" defaultValue={3.5} precision={0.5} readOnly />
                    <span className="newPrice">
                        $32.85 <span className="oldPrice">$33.8</span>
                    </span>
                </div>
            </div>

            <div className="itemTopProduct">
                <div className="itemTopProductImg">
                    <img src={TopProductImg3} alt="" />
                </div>

                <div className="itemTopProductInfo">
                    <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
                    <Rating name="half-read-only" defaultValue={3.5} precision={0.5} readOnly />
                    <span className="newPrice">
                        $32.85 <span className="oldPrice">$33.8</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TopProducts;
