import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase";
import PRODUCTS_DATA from '../products-data.js'

export const ProductsContext = createContext({
    productsMap: {}
})

export const ProductsProvider = ({ children }) => {


    const [productsMap, setProductsMap] = useState({});

    useEffect(() => {

        const getProductsMap = async () => {
            const productsMap = getCategoriesAndDocuments('products');

            setProductsMap(productsMap);


        }

        getProductsMap()


    }, [])


    /* useEffect(() => {
 
         addCollectionAndDocuments('products', PRODUCTS_DATA);
 
     }, [])
 */


    const value = { productsMap };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )


}