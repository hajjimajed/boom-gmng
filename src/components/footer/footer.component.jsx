import './footer.styles.scss'
import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as Fb } from '../../assets/facebook.svg';
import { ReactComponent as Ig } from '../../assets/instagram.svg';
import { ReactComponent as Li } from '../../assets/linkedin.svg';
import { ReactComponent as Tr } from '../../assets/twitter.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer-container'>
                <div className='logo'>
                    <MainLogo className='logo-icon' />
                </div>

                <div className='menu'>
                    <Link to='/' className='menu-link'><h1>Store</h1></Link>
                    <Link to='/' className='menu-link'><h1>Support</h1></Link>
                    <Link to='/' className='menu-link'><h1>Register</h1></Link>
                    <Link to='/' className='menu-link'><h1>Login</h1></Link>
                </div>

                <div className='social-media'>
                    <Fb className='icon' />
                    <Ig className='icon' />
                    <Li className='icon' />
                    <Tr className='icon' />
                </div>
            </div>
            <div className='footer-info'>
                <p>© Boom Gaming 2023, All Rights Reserved</p>
                <p>Designed By Majed Hajji</p>
            </div>
        </div>
    )
}

export default Footer;