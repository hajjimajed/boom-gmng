import './log-in.styles.scss'

import LogInForm from '../../components/log-in-form/log-in-form.component';
import Footer from '../../components/footer/footer.component'

const Login = () => {

    return (
        <>
            <div>
                <div>
                    <LogInForm />
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Login;