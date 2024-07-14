import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import CartQuantityToggle from './CartQuantityToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useCartContext } from '../Context/CartContext';

// this is called in SingleProduct.jsx page
const AddToCart = ({ product }) => {

  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {

    quantity < stock ? setQuantity(quantity + 1) : setQuantity(quantity);

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

      <NavLink to='/cart' onClick={() => { addToCart(id, color, quantity, product) }}>

        <Button className='btn'>Add To Cart</Button>
      </NavLink>

    </Wrapper>
  )
}


const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;