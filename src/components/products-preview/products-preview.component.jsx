import './products-preview.styles.scss'

import ProductCard from '../product-card/product-card.component';

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

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


const ProductsPreview = () => {
    const { productsMap } = useContext(ProductsContext);
    console.log(productsMap)





    return (
        <div className='category-preview-container'>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='preview'>


                {
                    Object.keys(productsMap).map(title => {
                        const products = productsMap[title];
                        return products

                            .map((product) =>
                                <motion.div variants={item}>   <ProductCard key={product.id} product={product} /></motion.div>)
                    })
                }

            </motion.div>
        </div>
    )

}

export default ProductsPreview;