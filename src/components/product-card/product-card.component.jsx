import './product-card.styles.scss'

import { motion } from 'framer-motion';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as AddLogo } from '../../assets/add.svg'
import { ReactComponent as CloseBtn } from '../../assets/close.svg'
import Button from '../Button/button.component'

import CardShow from '../card-show/card-show.component';

const show = {
    opacity: 1,
    display: "flex",
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

    const { name, price, imageUrl, captures } = product;

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

            <motion.div className='shape'
                initial={{ opacity: 0, display: "none" }} animate={isVisible ? hide : show}>
                <div className='game-description'>
                    <CardShow images={captures} />
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit molestiae. Maiores dolores consectetur, minus soluta hic similique laudantium cupiditate perferendis consequuntur quam at eligendi assumenda cumque possimus molestiae eos.</h1>
                </div>
                <div className='games-infos'>
                    <motion.img whileHover={{ scale: 1.05 }} src={imageUrl} alt="" />
                    <div className='game-info'>
                        <h1>{name}</h1>
                        <div className='price-container'><span className='price'>$ {price}</span></div>
                    </div>
                    <Button onClick={addProductToCart}>Add to cart</Button>
                </div>

                <motion.div className='close-btn'
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={visibleToggle}
                >
                    <CloseBtn className='close-img' />
                </motion.div>
            </motion.div>
        </div>
    )

}

export default ProductCard;