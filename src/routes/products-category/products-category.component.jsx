import './products-category.styles.scss'

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { motion } from 'framer-motion';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
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
        <>
            <div
                className='category-preview-container'>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='preview'>

                    {
                        products &&
                        products.map((product) => <motion.div variants={item} key={product.id}> <ProductCard key={product.id} product={product} /></motion.div>)
                    }

                </motion.div>
            </div>
        </>

    )


}

export default ProductsCategory;