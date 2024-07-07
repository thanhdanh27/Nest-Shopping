import './Sidebar.css';
import { useState, useEffect, Fragment } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';

import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faStar } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData(props.data);
    }, [props.data]);

    const [value1, setValue1] = useState([500, 5000]);
    const minDistance = 100;
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
        props.filterByPrice(newValue[0], newValue[1]);
    };

    const starRating = [2, 3, 4, 5];
    const [star, setStarRating] = useState();
    const getStarRating = (item) => {
        //setStarRating(item);
        props.fillterByRating(item);
    };

    return (
        <div className="wrapSidebar">
            <h1 className="container-card">
                <h2 className="cardTitle">Category</h2>
                <div className="cardBars">
                    <ul>
                        {productData.length !== 0 &&
                            productData.map((product, index) => {
                                return (
                                    <a href={`/Nest-Shopping/#/cat/${product.cat_name.toLowerCase()}`}>
                                        <li key={index}>
                                            <img src={product.image} alt="" />
                                            <span className="titleCardBars">{product.cat_name}</span>
                                            <span className="quantityCardBars">{product.quantity}</span>
                                        </li>
                                    </a>
                                );
                            })}
                    </ul>
                </div>
            </h1>

            <h1 className="container-card bg">
                <h2 className="cardTitle">Fill by price</h2>
                <div className="cardFillPrice">
                    <Slider
                        style={{ color: '#3bb77e' }}
                        value={value1}
                        min={0}
                        step={1}
                        max={60000}
                        valueLabelDisplay="auto"
                        onChange={handleChange1}
                        disableSwap
                    />
                    <div className="rangeDisplay">
                        <span>
                            From: <span>${value1[0]}</span>
                        </span>
                        <span>
                            To:<span>${value1[1]}</span>
                        </span>
                    </div>
                </div>

                <div className="wrapCheckBox">
                    <h3 className="titleCheckBox">Filter By Rating</h3>
                    <ul>
                        {starRating.map((item, index) => {
                            return (
                                <li key={index}>
                                    <FormControlLabel
                                        onClick={() => {
                                            getStarRating(item);
                                        }}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: green[400],
                                                    },
                                                    '& .MuiSvgIcon-root': { fontSize: 22 },
                                                }}
                                            />
                                        }
                                        label={
                                            <Fragment>
                                                {item}
                                                <FontAwesomeIcon className="starRating" icon={faStar} />
                                            </Fragment>
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="wrapCheckBox ">
                    <h3 className="titleCheckBox">Item Condition</h3>
                    <ul>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked': {
                                                color: green[400],
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 22 },
                                        }}
                                    />
                                }
                                label="New"
                            />
                        </li>

                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked': {
                                                color: green[400],
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 22 },
                                        }}
                                    />
                                }
                                label="Refurbished"
                            />
                        </li>

                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked': {
                                                color: green[400],
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 22 },
                                        }}
                                    />
                                }
                                label="Used"
                            />
                        </li>
                    </ul>
                </div>
                <div className="btnFillter">
                    <button>
                        <FontAwesomeIcon className="filterIcon" icon={faFilter} />
                        Fillter
                    </button>
                </div>
            </h1>
        </div>
    );
}

export default Sidebar;
