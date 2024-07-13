import React from 'react'

const CartReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':
            let { id, color, quantity, product } = action.payload;

            let cartProduct;

            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                quantity,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }

        case 'REMOVE_ITEM':
            let updatedCart = state.cart.filter((currentElement) => {
                return currentElement.id !== action.payload;
            });

            return {
                ...state,
                cart: updatedCart,
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            }

        default:
            return {
                ...state,
            }
    }

};

export default CartReducer;
