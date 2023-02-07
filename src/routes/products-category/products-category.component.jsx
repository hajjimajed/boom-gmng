import './products-category.styles.scss'

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

const ProductsCategory = () => {

    const { productsCategory } = useParams();
    const { productsMap } = useContext(ProductsContext);

    const [products, setProducts] = useState(productsMap[productsCategory]);

    useEffect(() => {
        setProducts(productsMap[productsCategory])
    }, [productsCategory, products])

    return (

        <div className='category-preview-container'>
            <div className='preview'>

                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }

            </div>
        </div>

    )


}

export default ProductsCategory;