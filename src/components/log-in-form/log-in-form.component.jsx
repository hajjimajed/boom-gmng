import './log-in-form.styles.scss'

import Button from '../Button/button.component';
import FormInput from '../form-input/form-input.component';

import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase';
import { useState } from 'react';
import { async } from '@firebase/util';

const defaultFormFields = {
    email: '',
    password: ''
}

const LogInForm = () => {

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password': alert("incorrect password");
                    break
                case 'auth/user-not-found': alert("incorrect email");
                    break
                default: console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div className="log-in-form-container">
            <MainLogo className='logo' />

            <form onSubmit={handleSubmit} className='login-form' action="" >


                <FormInput label="Email" required type="email" name="email" onChange={handleChange} value={email} />

                <FormInput label="Password" required type="password" name="password" onChange={handleChange} value={password} />

                <div className='login-btn-container'>
                    <Button type='submit' >Log in now</Button>
                    <button onClick={signInWithGoogle} className='google-btn'>
                        <div>
                            <GoogleLogo />
                        </div>

                        <span>Sign In With Google</span>
                    </button>
                </div>
            </form>
        </div>
    )

}

export default LogInForm;