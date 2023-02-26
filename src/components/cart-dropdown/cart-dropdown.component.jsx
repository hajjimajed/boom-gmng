import './cart-dropdown.styles.scss'

import Button from '../../components/Button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

import { motion } from 'framer-motion'

import { useState, useRef, useEffect, useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

import { useNavigate } from 'react-router-dom'



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


const CartDropdown = () => {

    const { cartItems, cartTotal, cartCount, isCartOpen, setIsCartOpen, toggleDropdown } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }


    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                toggleDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='cart-dropdown-container'>
            <div className='cart-header'>
                <div className='cart-dropdown-logo'>
                    <ShoppingBag className='shopping-icon'></ShoppingBag>
                    <span className='item-count'>{cartCount}</span>
                </div>
                <div className='cart-total'>
                    <span>total:</span>
                    <span className='total-price'>${cartTotal}</span>
                </div>
            </div>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <motion.div variants={item} key={cartItem.name}><CartItem key={cartItem.name} cartItem={cartItem} /> </motion.div>)
                }
            </div>
            <Button onClick={() => { goToCheckoutHandler(); toggleDropdown(); }} buttonType='checkout'>chekout</Button>
        </motion.div>
    )

}

export default CartDropdown;