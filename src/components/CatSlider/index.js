import Slider from 'react-slick';
import './CatSlider.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function CatSlider(props) {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        setProductData(props.data);
    }, [props.data]);

    let widthWindow = 3;
    if (window.innerWidth > 740 && window.innerWidth < 1025) {
        widthWindow = 6;
    } else if (window.innerWidth > 1025) {
        widthWindow = 10;
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: widthWindow,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const colors = [
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
    ];

    return (
        <div className="catSliderSection">
            <div className="container-fluid">
                <h2 className="titleCatSlider">Featured Categories</h2>
                <Slider className="mainCatSlider" {...settings}>
                    {productData.map((item, index) => {
                        return (
                            <div key={index} className="item">
                                <div
                                    style={{
                                        backgroundColor:
                                            colors[window.innerWidth > 1023 ? index % colors.length : 'none'],
                                    }}
                                    className="info"
                                >
                                    <Link to="/">
                                        <img
                                            className="imgCatSlider"
                                            src={`https://images.weserv.nl/?url=${encodeURIComponent(item.catImg)}`}
                                            alt="product"
                                        />
                                    </Link>
                                    <h4>{item.brand.toLowerCase()}</h4>
                                    <span>10 items</span>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default CatSlider;
