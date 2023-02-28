import './product-card.styles.scss'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as AddLogo } from '../../assets/add.svg'
import { ReactComponent as CloseBtn } from '../../assets/close.svg'
import { ReactComponent as Windows } from '../../assets/windows.svg'
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

    const { name, price, imageUrl, captures, logoUrl } = product;


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
                <div className='product-card-footer' onClick={visibleToggle}>
                    <span className='name' >{name}</span>
                    <span className='price'>${price}</span>
                </div>




            </motion.div>

            <motion.div className='game-overview'
                initial={{ opacity: 0, display: "none" }} animate={isVisible ? hide : show}>
                <div className='game-image-carousel'>
                    <div className='game-carousel'>
                        <GameCarousel captures={captures} />
                    </div>
                    <div className='game-description'>
                        <div className='description-text'>
                            <h2>description</h2>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae voluptatibus unde accusamus, inventore adipisci, omnis nam dicta, nihil repudiandae commodi fugit culpa magnam quaerat eius repellat esse vero ratione.</h1>
                        </div>
                        <div className='description-genre'>
                            <div className='genre'>
                                <h2>genres</h2>
                                <Link to='/store/action%20games' className='description-genre-link'><h3>Action</h3></Link>
                            </div>
                            <div className='genre'>
                                <h2>features</h2>
                                <Link to='/store' className='description-genre-link'><h3>competitive</h3></Link>
                            </div>
                            <div className='genre'>
                                <img src="https://i.ibb.co/8s2mS1g/12.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='games-infos'>
                    <div className='game-info-logo'>
                        <img src={logoUrl} alt="" />
                    </div>
                    <div className='game-info-btns'>
                        <h3>{name}</h3>
                        <div className='game-info-genre-container'>
                            <h2>action game</h2>
                        </div>
                        <h1>${price}</h1>
                        <div className='game-info-btn-container'>
                            <Button onClick={addProductToCart}>add to cart</Button>
                        </div>
                    </div>
                    <div className='game-info-desc'>
                        <div><h1>developer</h1><h2>ubisoft</h2></div>
                        <div><h1>publisher</h1><h2>boom gaming</h2></div>
                        <div><h1>release date</h1><h2>01/01/2023</h2></div>
                        <div><h1>platform</h1><Windows className='platform-logo' /></div>
                    </div>
                </div>


                <CloseBtn onClick={visibleToggle} className='close-img' />

            </motion.div>
        </div>
    )

}

export default ProductCard;