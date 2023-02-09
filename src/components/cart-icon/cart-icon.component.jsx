import './cart-icon.styles.scss'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { useContext, useRef, useEffect } from 'react';
import { CartContext } from '../../contexts/cart-context';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount, toggleDropdown } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);



    return (
        <>

            <div className='cart-icon-container' onClick={toggleDropdown}>
                <ShoppingBag className='shopping-icon' />
                <span className='item-count'>{cartCount}</span>
            </div>

            {
                isCartOpen && <CartDropdown />
            }
        </>
    )

}

export default CartIcon;