import './Sidebar.css';
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';

import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const [value1, setValue1] = React.useState([500, 1000]);
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
    };

    return (
        <div className="wrapSidebar">
            <h1 className="container-card">
                <h2 className="cardTitle">Category</h2>
                <div className="cardBars">
                    <ul>
                        <li>
                            <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                alt=""
                            />

                            <span className="titleCardBars">Milk & Dairies</span>
                            <span className="quantityCardBars">30</span>
                        </li>

                        <li>
                            <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                alt=""
                            />

                            <span className="titleCardBars">Milk & Dairies</span>
                            <span className="quantityCardBars">30</span>
                        </li>

                        <li>
                            <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                alt=""
                            />

                            <span className="titleCardBars">Milk & Dairies</span>
                            <span className="quantityCardBars">30</span>
                        </li>

                        <li>
                            <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                                alt=""
                            />

                            <span className="titleCardBars">Milk & Dairies</span>
                            <span className="quantityCardBars">30</span>
                        </li>
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
                        max={2000}
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
                    <h3 className="titleCheckBox">Color</h3>
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
                                label="Red"
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
                                label="Green"
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
                                label="Blue"
                            />
                        </li>
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
