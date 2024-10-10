import { useState, useEffect } from "react"
import { createContext, ReactElement } from "react"

// Define the product type. This is a simple example, but in a real-world application,
// you'd likely have more properties like description, quantity, etc.
export type ProductType = {
    sku: string,
    name: string,
    price: number
}

// Define the initial state of the products. In a real-world application, this
const initState: ProductType[] = []

// Define the context and provider components.
export type UseProductsContextType = { products: ProductType[] }

// Define the context state and provider components.
const initContextState: UseProductsContextType = { products: [] }

// Create the context and export it.
const ProductsContext = createContext<UseProductsContextType>(initContextState)

// Define the consumer component.
type ChildrenType = { children?: ReactElement | ReactElement[] }

// Define the provider component.
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    // Implement your logic to fetch and manage products here.
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        // Fetch products from an API or local storage.
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products')
                .then(res => {
                    return res.json()
                })
                .catch(err => {
                    if (err instanceof Error) console.log(err.message)
                })
            return data
        }
        // Fetch and set initial products when the component mounts.
        fetchProducts()
            .then(products => setProducts(products))
            .catch(err => console.error(err))
    }, [])

    // Implement your logic to handle product actions here.
    return (
        <ProductsContext.Provider value={{ products: initState }}>
            {children}
        </ProductsContext.Provider>
    )
} 