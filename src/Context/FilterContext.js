import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: 'lowest',
    filters: {
        text: '',
        category: 'all',
        company: 'all',
        colors: 'all',
    }
}

const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRID_VIEW' });
    };

    // to set list view
    const setListView = () => {
        return dispatch({ type: 'SET_LIST_VIEW' });
    };

    // this is sorting function for dropDown menu used in Sort.jsx file and in Products Page.
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
    };

    // this is to update the search bar in file FilterSection.jsx used on page Products
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
    }

    useEffect(() => {
        dispatch({ type: 'SORTING_PRODUCTS' });
        dispatch({ type: 'FILTER_PRODUCT' });
    }, [products, state.sortingValue, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRDUCTS", payload: products })
    }, [products]);



    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }} >
            {children}
        </FilterContext.Provider>

    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };