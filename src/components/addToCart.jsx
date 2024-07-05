import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import cartQuantityToggle from './cartQuantityToggle';
import { NavLink } from 'react-router-dom';
import Button from '../styles/Button';

const addToCart = ({ product }) => {

    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);

    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    };

    const setIncrease = () => {
        const setDecrease = () => {
            quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity);
        };
    };



    return (
        <Wrapper>
            <div className="colors">
                <p>
                    Colors:
                    {
                        colors.map((currentColor, index) => {
                            return (
                                <button key={index} style={{ backgroundColor: currentColor }} className={color === currentColor ? "btnStyle active" : "btnStyle"} onClick={() => setColor(currentColor)}>
                                    {color === currentColor ? <FaCheck className='checkStyle' /> : null}
                                </button>
                            );
                        })
                    }
                </p>
            </div>

            {/* adding to cart/ increment button code  */}
            <CartQuantityToggle 
            quantity={quantity} 
            setDecrease={setDecrease} 
            setIncrease={setIncrease} />

            <NavLink to='/cart' >
            <Button className='btn'>Add To Cart</Button>
            </NavLink>

        </Wrapper>
    )
}

export default addToCart
