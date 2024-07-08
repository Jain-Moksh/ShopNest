import React from "react";

const filterReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_FILTER_PRDUCTS':
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            }

        case 'SET_GRID_VIEW':
            return {
                ...state,
                gridView: true,
            }

        case 'SET_LIST_VIEW':
            return {
                ...state,
                gridView: false,
            }

        case 'GET_SORT_VALUE':
            // let userSortValue = document.getElementById('sort');
            return {
                ...state,
                sortingValue: action.payload,
            }

        case 'SORTING_PRODUCTS':
            const { filterProducts, sortingValue } = state;

            let tempSortData = [filterProducts];

            const sortingProducts = (a, b) => {
                if (sortingValue === 'a-z') {
                    return a.name.localeCompare(b.name);
                };

                if (sortingValue === 'z-a') {
                    return b.name.localeCompare(a.name);
                };
                if (sortingValue === 'lowest') {
                    return a.price - b.price;
                };
                if (sortingValue === 'highest') {
                    return b.price - s.price;
                };
            };

            let newSortData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filterProducts: newSortData,
            };

        case 'UPDATE_FILTERS_VALUE':
            const { name, value } = action.payload;

            return {
                ...state,
                filters:
                {
                    ...state.filters,
                    [name]: value,
                }
            }

        case 'FILTER_PRODUCT':
            let { allProducts } = state;
            let tempProducts = [...allProducts];

            const { text } = state.filters;

            if (text) {
                tempProducts: tempProducts.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(text);
                });
            }

            return {
                ...state,
                filterProducts: tempProducts,
            };


        default:
            return state;
    }
};

export default filterReducer;