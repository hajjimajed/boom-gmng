import './checkout.styles.scss'

import Button from '../../components/Button/button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import Footer from '../../components/footer/footer.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

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

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);



    return (
        <>
            <motion.div className='checkout-container'
                variants={container}
                initial="hidden"
                animate="visible"
            >

                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map((cartItem) => (
                        <motion.div variants={item} className='checkout-items-container'><CheckoutItem key={cartItem.id} cartItem={cartItem} /></motion.div>
                    ))
                }

                <span className='total'>Total: ${cartTotal}</span>

                <Button >Payment</Button>

            </motion.div>


            <Footer />
        </>
    )
}

export default Checkout;