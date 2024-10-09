import { Product } from "../types/app"

type Props = {
    productsData: Product[]
}

export default function ProductList({ productsData }: Props) {
    return (
        <div>
            {productsData.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.desc}</p>
                </div>
            ))}
        </div>
    )
}