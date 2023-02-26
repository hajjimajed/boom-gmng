import './register.styles.scss'

import RegisterForm from '../../components/register-form/register-form.component';
import Footer from '../../components/footer/footer.component'

const Register = () => {
    return (
        <>
            <div>
                <div>
                    <RegisterForm />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Register;