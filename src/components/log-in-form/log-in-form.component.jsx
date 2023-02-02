import './log-in-form.styles.scss'

import Button from '../Button/button.component';
import FormInput from '../form-input/form-input.component';

import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';

const LogInForm = () => {

    return (
        <div className="log-in-form-container">
            <MainLogo className='logo' />

            <form className='login-form' action="" >


                <FormInput label="Email" required type="email" name="email" />

                <FormInput label="Password" required type="password" name="password" />

                <div className='login-btn-container'>
                    <Button type='submit' >Log in now</Button>
                    <button className='google-btn'>
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