import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    const productlist = products?.map(product => <ProductCard key={product?._id} product={product} />)
    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-20 mb-4 underline text-red-500 ">Our Products</h1>
            <div className="sm:c-container-large lg:c-container-large mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 px-4 gap-8 sm:p-8">
                {productlist}
            </div>
        </>
    )
}

export default Products