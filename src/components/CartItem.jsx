import React from 'react'
import FormatPrice from './helpers/FormatPrice';
import CartQuantityToggle from './CartQuantityToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

const CartItem = ({ product }) => {

    const { id, name, image, color, price, quantity } = product;


    // const [quantity, setQuantity] = useState(1);

    const { removeItem, setDecrease, setIncrease } = useCartContext();


    // const setDecrease = () => {
    //     // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    // };

    // const setIncrease = () => {
    //     // quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity);
    // };



    return (
        <div className='cart-heading grid grid-five-column'>
            <div className="cart-image--name">

                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>

                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Color:</p>
                        <div className="color-style" style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>

            </div>

            <div className="cart-hide">
                <p><FormatPrice price={price} /></p>
            </div>


            <CartQuantityToggle
                quantity={quantity}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)} />

            <div className="cart-hide">
                <p><FormatPrice price={price * quantity} /></p>
            </div>

            <div>
                <FaTrash className='remove_icon' onClick={() => removeItem(id)} />
            </div>

        </div>
    )
}

export default CartItem;
