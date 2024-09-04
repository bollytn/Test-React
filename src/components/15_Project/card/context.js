import React, { useContext, useState } from "react"
import cartItems from './data'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{
        
    }}
    >
        {children}
    </AppContext.Provider>
}
