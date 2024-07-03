
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/productReducer';


// creating context
const AppContext = createContext();

// assigning api link to api variable
const API = 'https://api.pujakaitem.com/api/products';

// defining the initial state of the useReducer Hook 
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

// defining the provider of the context api = AppContext 
const AppProvider = ({ children }) => {

    // declaring useReducer hook whose reducer function is defined in ProductReducer.js file
    // Its initialState is defined above 
    // it is use to handle all the products
    const [state, dispatch] = useReducer(reducer, initialState);

    // used axios with async/await to fetch the api of products
    const getProducts = async (url) => {

        dispatch({ type: 'SET_LOADING' });

        try {
            // here res contains all the information of api including unnesecary
            // here products has only the product information i.e the array of products 
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: 'SET_API_DATA', payload: products });
        } catch (error) {
            dispatch({ type: 'API_ERROR' });
        }
    };

    // my 2nd api call for single product
    const getSingleProduct = async(url) =>{

        dispatch({ type: 'SET_SINGLE_LOADING' });

        try{
            // here res contains all the information of api including unnesecary
            // here products has only the product information i.e the array of products 
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleProduct })

        } catch(error){
            dispatch({ type: 'SET_SINGLE_ERROR' });
        }
    }

    // used useEffect hook for loading all the products details when the website is first loaded or started 
    useEffect(() => {
        getProducts(API);
        
    }, [])

    // returning the initial state values to all the components of the project
    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
};

// created a custom function which calls or returns AppContext 
// this is intend to import less thing in the component where we have to use this context api
const useProductContext = () => {
    return useContext(AppContext);
}

// exported 
export { AppProvider, AppContext, useProductContext };