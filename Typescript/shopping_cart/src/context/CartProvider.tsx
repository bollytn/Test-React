export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

// Define the initial state of the cart. In a real-world application, this
type CartStateType = { cart: CartItemType[] }

// Define the initial state of the cart. In a real-world application, this
const initialState: CartStateType = {
    cart: []
}

// Define the reducer function
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

// Define the context state and provider components.
export type ReducerAction = {
    type: string,
    payload?: CartItemType
}


const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('Missing payload for ADD action')
            }
        }

        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('Missing payload for REMOVE action')
            }
        }

        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('Missing payload for QUANTITY action')
            }
        }

        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }

        default:
            throw new Error('unidentified reducer action type')
    }
}