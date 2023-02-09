import './products-category.styles.scss'

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const ProductsCategory = () => {

    const { productsCategory } = useParams();
    const { productsMap } = useContext(ProductsContext);

    const [products, setProducts] = useState(productsMap[productsCategory]);

    useEffect(() => {
        setProducts(productsMap[productsCategory])
    }, [productsCategory, products])

    return (

        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='category-preview-container'>
            <div className='preview'>

                {
                    products &&
                    products.map((product) => <motion.div variants={item}> <ProductCard key={product.id} product={product} /></motion.div>)
                }

            </div>
        </motion.div>

    )


}

export default ProductsCategory;