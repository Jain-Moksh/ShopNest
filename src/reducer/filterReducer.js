import React from "react";

const filterReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_FILTER_PRDUCTS':
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            }

        default:
            return state;
    }
};

export default filterReducer;