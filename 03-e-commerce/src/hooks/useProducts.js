import { useEffect, useState } from "react"
import { getProducts } from '../services/products';

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const refreshProducts = () => {
        getProducts().then((productsList) => {
            setProducts(productsList)
            setLoading(false)
        })
    }

    useEffect(refreshProducts, [])

    return {
        products,
        loading,
        refreshProducts
    }
}