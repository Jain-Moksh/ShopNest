import React from 'react'

const CartReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':
            let { id, color, quantity, product } = action.payload;

            // to tackle existing product
            let existingProduct = state.cart.find((currentElement) => {
                return (currentElement.id === id + color);
            });

            if (existingProduct) {
                let updatedProduct = state.cart.map((currentElement) => {
                    if (currentElement.id = id + color) {
                        let newQuantity = currentElement.quantity + quantity;

                        if (newQuantity >= currentElement.max) {
                            newQuantity = currentElement.max;
                        }
                        return {
                            ...currentElement,
                            quantity: newQuantity,
                        };
                    } else {
                        return {
                            ...currentElement,
                        };
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct,
                }
            } else {

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

        case 'SET_DECREMENT':
            let updatedProductDecrement = state.cart.map((currentElement) => {
                if (currentElement.id === action.payload) {
                    let decrementQuantity = currentElement.quantity - 1;

                    if (decrementQuantity <= 1) {
                        decrementQuantity = 1;
                    }
                    return {
                        ...currentElement,
                        quantity: decrementQuantity,
                    };
                } else {
                    return {
                        ...currentElement,
                    }
                }
            });
            return {
                ...state,
                cart: updatedProductDecrement,
            }

        case 'SET_INCREMENT':
            let updatedProductIncrement = state.cart.map((currentElement) => {
                if (currentElement.id === action.payload) {
                    let incrementQuantity = currentElement.quantity + 1;

                    if (incrementQuantity >= currentElement.max) {
                        incrementQuantity = currentElement.max;
                    }
                    return {
                        ...currentElement,
                        quantity: incrementQuantity,
                    };
                } else {
                    return {
                        ...currentElement,
                    }
                }
            });
            return {
                ...state,
                cart: updatedProductIncrement,
            }

        case 'CART_TOTAL_ITEM':
            let updatedTotalItem = state.cart.reduce((accumulator, currentElement) => {
                let { quantity } = currentElement;
                accumulator = accumulator + quantity;
                return accumulator;
            }, 0);

            return {
                ...state,
                totalItem: updatedTotalItem,
            }

        case 'CART_TOTAL_PRICE':
            // let {totalPrice} = state;
            let total_price = state.cart.reduce((accumulator, currentElement) => {
                const { quantity, price } = currentElement;
                accumulator = accumulator + (quantity * price);
                return accumulator;
            }, 0);

            return {
                ...state,
                totalPrice: total_price,
            }

        default:
            return {
                ...state,
            }
    }

};

export default CartReducer;
