import React from "react";

const filterReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_FILTER_PRDUCTS':
            let priceArr = action.payload.map((currentElement) => currentElement.price);

            let maxPrice = Math.max(...priceArr);

            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
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

            let tempSortData = [...filterProducts];

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
                    return b.price - a.price;
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

            const { text, category, company, colors, price } = state.filters;

            if (text) {
                tempProducts = tempProducts.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(text);
                });
            }

            if (category !== 'all') {
                tempProducts = tempProducts.filter((currentElement) => {
                    return currentElement.category.toLowerCase() === category.toLowerCase();
                })
            }

            if (company !== 'all') {
                tempProducts = tempProducts.filter((currentElement) => {
                    return currentElement.company.toLowerCase() === company.toLowerCase();
                })
            }

            if (colors !== 'all') {
                tempProducts = tempProducts.filter((currentElement) => {
                    currentElement.colors.includes(colors);
                })
            }

            // agar naa chale toh ek baar price normal rakhna yani === 0 ko nikal dena and else part ka inner protion ko if k inner portion mein rakhna 
            if (price) {

                tempProducts = tempProducts.filter((currentElement) => {
                    return currentElement.price <= price;

                    // tempProducts = tempProducts.filter((currentElement) => {
                    //     currentElement.price == price;
                });
            } else {
                tempProducts = tempProducts.filter((currentElement) => {
                    return currentElement.price == price;

                    // tempProducts = tempProducts.filter((currentElement) => {
                    //     currentElement.price <= price;
                });
            }

            return {
                ...state,
                filterProducts: tempProducts,
            };

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'all',
                    company: 'all',
                    colors: 'all',
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                },
            }


        default:
            return state;
    }
};

export default filterReducer;