import './support.styles.scss'
import ContactForm from '../../components/contact-form/contact-form.component';
import Footer from '../../components/footer/footer.component'

import { motion } from 'framer-motion';

const Support = () => {
    return (
        <>
            <div className='support-container'>
                <motion.div initial={{ translateY: 50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1
                    }}>
                    <ContactForm />
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

export default Support;