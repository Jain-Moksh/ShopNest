import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
}

const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRDUCTS", payload: products })
    }, []);

    return (
        <FilterContext.Provider value={{ ...state }} >
            {children}
        </FilterContext.Provider>

    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };