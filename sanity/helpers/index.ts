import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, PRODUCTS_QUERY, SALE_QUERY } from "./queries";

export const getSale = async ()=> {
    try {
        const products = await sanityFetch({
            query: SALE_QUERY,
        })
        return products?.data || [];
    }catch (error){
        console.error('Fetch error' + error);
        return[];
    }
}

export const getAllProducts = async ()=> {
    try {
        const products =await sanityFetch({
            query:PRODUCTS_QUERY,
        })
        return products.data || []
    } catch(error) {
        console.error('Error during fetching All products', error)
        return[]
    }
}

export const getAllCategories = async ()=> {
    try {
        const categories =await sanityFetch({
            query:CATEGORIES_QUERY,
        })
        return categories.data || []
    } catch(error) {
        console.error('Error during fetching All categories', error)
        return[]
    }
}