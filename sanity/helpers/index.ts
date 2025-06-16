import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, MY_ORDERS_QUERY, PRODUCT_BY_CATEGORY_QUERY, PRODUCT_BY_ID_QUERY, PRODUCT_SEARCH_QUERY, PRODUCTS_QUERY, SALE_QUERY } from "./queries";

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

export const getProductBySlug = async (slug: string) => {
//   const PRODUCT_BY_ID_QUERY = defineQuery(
//     `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
//   );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};


export const searchProductsByName = async (searchParam: string) => {
 
  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}`,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by name:", error);
    return [];
  }
};

export const getProductsByCategory = async (categorySlug: string) => {
  
  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Erroor fetching products by category:", error);
    return [];
  }
};

export const getMyOrders = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });
    return orders?.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};