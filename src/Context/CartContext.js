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
    totalAmount: '',
    shippingFees: '',
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

    // to add data in local storage
    useEffect(() => {
        localStorage.setItem("ShopNestCart", JSON.stringify(state.cart));
    }, [state.cart]);


    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }} >
        {children}
    </CartContext.Provider >;
};


const useCartContext = () => {
    return useContext(CartContext);
};


export { CartProvider, useCartContext };