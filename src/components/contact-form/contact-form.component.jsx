import './contact-form.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import FormInput from '../form-input/form-input.component';
import Button from '../Button/button.component';


const ContactForm = () => {

    return (
        <div className="log-in-form-container">



            <MainLogo className='logo' />

            <form className='contact-form' action="" >


                <FormInput label="Email" required type="email" name="email" />

                <FormInput label="Name" required type="name" name="name" />
                <div className='message-container'>
                    <textarea className='message' name="message" id="" cols="30" rows="5"></textarea>
                    <label className='shrink message-label '>Message</label>
                </div>


                <Button type='submit' >Send</Button>

            </form>
        </div>
    )

}

export default ContactForm;