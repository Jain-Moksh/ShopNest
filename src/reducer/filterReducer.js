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

        default:
            return state;
    }
};

export default filterReducer;