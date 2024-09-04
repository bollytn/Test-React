import React, { useReducer, useState } from "react"
import reducer from './reducer'
import cartItems from './data'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialState = {
    loading: false,
    card: cartItems,
    total: 0,
    amount: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{
        ...state,
    }}
    >
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider }
