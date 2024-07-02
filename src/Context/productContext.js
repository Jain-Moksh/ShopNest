// 3 parts of context API

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

// create context 
// provider 
// consumer => useContext hook

// creating context
const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products';

const AppProvider = ({ children }) => {

    const getProducts = async(url) => {
        const res = await axios.get(url);
        const products = await res.data;
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return <AppContext.Provider value='ShopNest'>
        {children}
    </AppContext.Provider>
};


const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };