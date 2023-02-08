import './register-form.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as Check } from '../../assets/checkmark.svg';

import Button from '../Button/button.component';
import FormInput from '../form-input/form-input.component';

import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import { async } from '@firebase/util';

import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { currentUser, setCurrentUser } = useContext(UserContext);

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
            setCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName });
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



            {
                currentUser ? (
                    <div className='registering-done'>
                        <Check className='check-logo'></Check>
                        <h1>Thanks For Registering !</h1>
                        <Button>Check Our Store</Button>
                    </div>
                ) :
                    (
                        <>
                            <MainLogo className='logo' />
                            <form action="" className='register-form' onSubmit={handleSubmit}>

                                <FormInput onChange={handleChange} label="Display Name" required type="text" name="displayName" value={displayName} />

                                <FormInput onChange={handleChange} label="Email" required type="email" name="email" value={email} />

                                <FormInput onChange={handleChange} label="Password" required type="password" name="password" value={password} />

                                <FormInput onChange={handleChange} label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} />

                                <Button buttonType='signUp' type="submit">Sign Up</Button>

                            </form>
                        </>
                    )
            }



        </div>
    )

}
export default RegisterForm;