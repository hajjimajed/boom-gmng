import './register-form.styles.scss'

import Button from '../Button/button.component';
import FormInput from '../form-input/form-input.component';

import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';

const RegisterForm = () => {

    return (
        <div className='register-form-container'>

            <MainLogo className='logo' />

            <form action="" >

                <FormInput label="Display Name" required type="text" name="displayName" />

                <FormInput label="Email" required type="email" name="email" />

                <FormInput label="Password" required type="password" name="password" />

                <FormInput label="Confirm Password" required type="password" name="confirmPassword" />

                <Button buttonType='signUp' type="submit">Sign Up</Button>

            </form>

        </div>
    )

}
export default RegisterForm;