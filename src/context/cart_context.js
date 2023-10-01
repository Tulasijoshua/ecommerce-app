import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartDatat = () => {
    let localCartData = localStorage.getItem("thapaCart")
    // if(localCartData === []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }

    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];

    return parsedData;
}

const initialState = { 
    // cart: [],
    cart: getLocalCartDatat(), 
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});

    };

    // increment and decrement the product 
    const setDecrease = (id) => {
        dispatch({type: "SET_DECREMENT", payload: id})
    }

    const setIncrease = (id) => {
        dispatch({type: "SET_INCREMENT", payload: id})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    // to clear the cart
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    // add to localStorage 
    // get vs set 

    useEffect(() => {
        // dispatch({type: "CART_TOTAL_ITEM"});
        // dispatch({type: "CART_TOTAL_PRICE"});
        dispatch({type: "CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("thapaCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider 
        value={{ 
            ...state, 
            addToCart, 
            removeItem, 
            clearCart,
            setDecrease,
            setIncrease }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;