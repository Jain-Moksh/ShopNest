import React, { createContext, useContext, useEffect, useReducer } from "react";
import Product from "../components/Product";
import reducer from '../reducer/CartReducer';

const CartContext = createContext();


const getLocalCartData = () => {
    let localCartData = localStorage.getItem("ShopNestCart");
    if (!localCartData) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    totalItem: '',
    totalPrice: '',
    shippingFees: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const addToCart = (id, color, quantity, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, color, quantity, product } });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const setDecrease = (id) => {
        dispatch({type: 'SET_DECREMENT', payload: id});
    }

    const setIncrease = (id) => {
        dispatch({type: 'SET_INCREMENT', payload: id});
    }

    // to add data in local storage
    useEffect(() => {
        dispatch({type: 'CART_TOTAL_ITEM'});
        dispatch({type: 'CART_TOTAL_PRICE'});
        localStorage.setItem("ShopNestCart", JSON.stringify(state.cart));
    }, [state.cart]);


    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }} >
        {children}
    </CartContext.Provider >;
};


const useCartContext = () => {
    return useContext(CartContext);
};


export { CartProvider, useCartContext };