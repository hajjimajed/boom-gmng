import './cart-dropdown.styles.scss'

import Button from '../../components/Button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

import { motion } from 'framer-motion'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <motion.div
            initial={{ scale: 0, y: -200 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
                type: "keyframes",
                duration: 0.2
            }}
            className='cart-dropdown-container'>
            <div className='cart-header'>
                <div className='cart-dropdown-logo'>
                    <ShoppingBag className='shopping-icon'></ShoppingBag>
                    <span className='item-count'>0</span>
                </div>
                <div className='cart-total'>
                    <span>total:</span>
                    <span className='total-price'>$299.000</span>
                </div>
            </div>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.name} cartItem={cartItem} />)
                }
            </div>
            <button>chekout</button>
        </motion.div>
    )

}

export default CartDropdown;