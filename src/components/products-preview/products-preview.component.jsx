import './products-preview.styles.scss'

import ProductCard from '../product-card/product-card.component';

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';



const ProductsPreview = () => {
    const { productsMap } = useContext(ProductsContext);
    console.log(productsMap)
    return (
        <div className='category-preview-container'>
            <div className='preview'>

                {
                    Object.keys(productsMap).map(title => {
                        const products = productsMap[title];
                        return products

                            .map((product) =>
                                <ProductCard key={product.id} product={product} />)
                    })
                }

            </div>
        </div>
    )

}

export default ProductsPreview;