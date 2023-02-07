import './product-card.styles.scss'

import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;

    return (
        <motion.div
            initial={{ scale: 0, y: 200 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
                type: 'tween',
                duration: 0.2
            }}
            className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name' >{name}</span>
                <div className='price-container'><span className='price'>$ {price}</span></div>
            </div>

            <div className='add-to-cart-btn'></div>

        </motion.div>
    )

}

export default ProductCard;