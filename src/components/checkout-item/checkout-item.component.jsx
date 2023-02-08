import './checkout-item.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as Plus } from '../../assets/plus.svg'
import { ReactComponent as Minus } from '../../assets/minus.svg'
import { ReactComponent as Close } from '../../assets/close.svg'

import { motion } from 'framer-motion';

const CheckoutItem = ({ cartItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (

        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "keyframes",
                duration: 0.4,
            }}
            className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='item-quantity-btn' onClick={removeItemHandler} ><Minus className='btn' /></div>
                <span className='value'>{quantity}</span>
                <div className='item-quantity-btn' onClick={addItemHandler} ><Plus className='btn' /></div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={clearItemHandler} ><Close className='btn' /></div>
        </motion.div>

    )

}

export default CheckoutItem;