import './contact-form.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as Check } from '../../assets/checkmark.svg';

import FormInput from '../form-input/form-input.component';
import Button from '../Button/button.component';

import { useState } from 'react';
import { contactMessage } from '../../utils/firebase/firebase';

import { useNavigate } from 'react-router-dom';


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
        <div className="log-in-form-container">


            {
                isMessageSent ? (
                    <div className='contact-done'>
                        <Check className='check-logo'></Check>
                        <h1>Thanks For Your Message !</h1>
                        <Button onClick={goToStoreHandler}>Check Our Store</Button>
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