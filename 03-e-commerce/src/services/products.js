import { CONSTANTS } from '../utils/constants'

export const getProducts = async () => {
    const response = await fetch(CONSTANTS.PRODUCTS_ENDPOINT)
    const data = await response.json()
    const { products } = data
    return products
}