import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function QuantityBox(props) {
    const [valueInput, setValueInput] = useState(1);
    const [cartItems, setCartItem] = useState([]);

    useEffect(() => {
        setCartItem(props.cartItem);
    }, [props.cartItem]);

    const updateCart = (item) => {
        props.updateCart(item);
    };
    return (
        <div className="boxInput">
            <input type="number" value={valueInput} />
            <FontAwesomeIcon
                className="arrowUp"
                onClick={() => {
                    setValueInput(valueInput + 1);
                    const newCart = cartItems?.map((item, key) => {
                        return key === props.index ? { ...item, quantity: valueInput + 1 } : { ...item };
                    });
                    setCartItem(newCart);
                    updateCart(newCart);
                }}
                icon={faCaretUp}
            />
            <FontAwesomeIcon
                className="arrowDown"
                onClick={() => {
                    setValueInput((prev) => Math.max(0, prev - 1));
                    const newCart = cartItems?.map((item, key) => {
                        return key === props.index ? { ...item, quantity: Math.max(0, valueInput - 1) } : { ...item };
                    });

                    setCartItem(newCart);
                    updateCart(newCart);
                }}
                icon={faCaretDown}
            />
        </div>
    );
}
export default QuantityBox;
