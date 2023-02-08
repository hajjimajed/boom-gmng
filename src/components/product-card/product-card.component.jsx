import './product-card.styles.scss'

import { motion } from 'framer-motion';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as AddLogo } from '../../assets/add.svg'

const show = {
    opacity: 1,
    display: "block",
    zIndex: 10
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    },
    zIndex: 0
};


const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;

    const [isVisible, setIsVisible] = useState(true);

    const visibleToggle = () => {
        setIsVisible(!isVisible)
    }


    const { cartItems, setCartItems, addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className='product-main-container'>
            <motion.div
                initial={{ scale: 0, y: 200 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                    type: "keyframes",
                    duration: 0.2
                }}
                whileHover={{ scale: 1.1 }}
                className='product-card-container'>
                <div className='image-container'>
                    <img src={imageUrl} alt={name} onClick={visibleToggle} />
                    <motion.div
                        onClick={addProductToCart}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 },
                        }}
                        className='add-to-cart-btn'>
                        <AddLogo className='add-logo' />
                    </motion.div>
                </div>
                <div className='footer' onClick={visibleToggle}>
                    <span className='name' >{name}</span>
                    <div className='price-container'><span className='price'>$ {price}</span></div>
                </div>




            </motion.div>

            <motion.div className='shape' initial={{ opacity: 0, display: "none" }} animate={isVisible ? hide : show}>
                <h1>{name}</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum voluptates ipsam impedit obcaecati facilis vero aliquid qui laborum voluptas temporibus laudantium, quisquam in numquam. Nihil iste quasi tempore natus eveniet.</h1>
                <motion.button className='btn'
                    whileTap={{ scale: 0.95 }}
                    onClick={visibleToggle}
                >
                    {isVisible ? "Hide" : "Show"}
                </motion.button>
            </motion.div>
        </div>
    )

}

export default ProductCard;