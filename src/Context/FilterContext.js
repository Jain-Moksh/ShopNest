import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: '',
    filters: {
        text: '',
        category: 'all',
        company: 'all',
        colors: 'all',
        maxPrice: 0,
        price: 0,
        minPrice: 0,

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

    const initiateSort = () => {
        dispatch({ type: 'SORTING_PRODUCTS' });
    };

    // const sorting = (event) => {
    //     let userValue = event.target.value;
    //     dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    //   };

    // this is to update the search bar in file FilterSection.jsx used on page Products
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
    }

    // to clear all the filters applied 
    const clearFilters = () => {
        dispatch({ type: 'CLEAR_FILTERS' });
    }

    useEffect(() => {
        dispatch({ type: 'SORTING_PRODUCTS', });
        dispatch({ type: 'FILTER_PRODUCT' });
    }, [products, state.sortingValue, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRDUCTS", payload: products })
    }, [products]);



    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, initiateSort, clearFilters }} >
            {children}
        </FilterContext.Provider>

    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };