import './contact-form.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as Check } from '../../assets/checkmark.svg';

import FormInput from '../form-input/form-input.component';
import Button from '../Button/button.component';

import { useState } from 'react';
import { contactMessage } from '../../utils/firebase/firebase';

import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';


const defaultFormFields = {
    name: '',
    email: '',
    message: ''
}

const ContactForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, name, message } = formFields;
    const [isMessageSent, setIsMessageSent] = useState(false)


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        contactMessage(email, name, message)
        resetFormFields();
        setIsMessageSent(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }


    const navigate = useNavigate();

    const goToStoreHandler = () => {
        navigate('/store')
    }

    return (
        <div className="contact-form-container">


            {
                isMessageSent ? (
                    <div className='contact-done'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                duration: 0.3
                            }}
                        >
                            <Check className='check-logo'></Check>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -30 }} animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.2,
                                delay: 0.2
                            }}
                        >
                            <h1 className='message-sent'>Thanks You!</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -30 }} animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.2,
                                delay: 0.2
                            }}
                        >
                            <h1 className='message-sent'>Message Received!</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -30 }} animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.2,
                                delay: 0.3
                            }}
                        >
                            <Button onClick={goToStoreHandler}>Check Our Store</Button>
                        </motion.div>
                    </div>) : (
                    <>
                        <MainLogo className='logo' />
                        <form className='contact-form' action="" onSubmit={handleSubmit}>


                            <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange} />

                            <FormInput label="Name" required type="name" name="name" value={name} onChange={handleChange} />
                            <div className='message-container'>
                                <textarea required className='message' name="message" id="" cols="30" rows="5" value={message} onChange={handleChange}></textarea>
                                <label className='shrink message-label '>Message</label>
                            </div>


                            <Button type='submit' >Send</Button>

                        </form>
                    </>
                )
            }


        </div>
    )

}

export default ContactForm;