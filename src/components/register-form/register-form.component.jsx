import './register-form.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';

import Button from '../Button/button.component';
import FormInput from '../form-input/form-input.component';

import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import { async } from '@firebase/util';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password confirmation not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            console.log(user)
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email is already exist')
            }
            else {
                console.log("user creation encountered an error", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='register-form-container'>

            <MainLogo className='logo' />

            <form action="" onSubmit={handleSubmit}>

                <FormInput onChange={handleChange} label="Display Name" required type="text" name="displayName" value={displayName} />

                <FormInput onChange={handleChange} label="Email" required type="email" name="email" value={email} />

                <FormInput onChange={handleChange} label="Password" required type="password" name="password" value={password} />

                <FormInput onChange={handleChange} label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} />

                <Button buttonType='signUp' type="submit">Sign Up</Button>

            </form>

        </div>
    )

}
export default RegisterForm;