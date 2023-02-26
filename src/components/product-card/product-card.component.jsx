import './product-card.styles.scss'

import { motion } from 'framer-motion';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as AddLogo } from '../../assets/add.svg'
import { ReactComponent as CloseBtn } from '../../assets/close.svg'
import Button from '../Button/button.component'

import GameCarousel from '../game-carousel/game-carousel.component';

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

const slides = [
    { id: 1, bgColor: 'https://i.ibb.co/VTKQTHP/Untitled-1.png', img: 'https://i.ibb.co/S04tn9C/pngwing-com-9.png' },
    { id: 2, bgColor: 'https://i.ibb.co/fFTMnJz/Untitled.png', img: 'https://i.ibb.co/VMSxvkv/pngegg.png' },
    { id: 3, bgColor: 'https://i.ibb.co/42phQrN/Untitled-2.png', img: 'https://i.ibb.co/YhjZ7ZM/pngegg-5.png' }
];



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

            <motion.div className='game-overview'
                initial={{ opacity: 0, display: "none" }} animate={isVisible ? hide : show}>
                <div className='game-image-carousel'>
                    <div className='game-carousel'>
                        <GameCarousel captures={captures} />
                    </div>
                    <div className='game-description'>
                    </div>
                </div>
                <div className='games-infos'>


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