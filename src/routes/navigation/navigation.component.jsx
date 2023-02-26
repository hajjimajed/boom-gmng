import './navigation.styles.scss'
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as UserLogo } from '../../assets/logIn.svg'

import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart-context';

import { signOutUser } from '../../utils/firebase/firebase';
import { currentUserData } from '../../utils/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);


    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }


    const [userMap, setUserMap] = useState({});
    const [done, setDone] = useState(false)
    useEffect(() => {

        const userCheck = async () => {

            const res = await currentUserData(currentUser);
            setUserMap(res);
            setDone(true)


        }

        userCheck()


    }, [])


    const [activeLink, setActiveLink] = useState('store');

    const handleClick = (link) => {
        setActiveLink(link);
    };



    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsNavigationMenuOpen(!isNavigationMenuOpen);
        setIsButtonClicked(!isButtonClicked);
    }

    const handleMenuLink = () => {
        setIsNavigationMenuOpen(false);
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <Fragment>



            <div className='navigation'>
                <div className='main-logo-container'>
                    <Link onClick={() => { handleClick('/'); handleMenuLink(); }} to='/' className='main-logo-link'>
                        <MainLogo className='main-logo' />
                    </Link>
                    <div className='navigation-cart-icon-container'>
                        <CartIcon />
                    </div>
                </div>
                <div className={`navigation-container ${isNavigationMenuOpen ? 'navigation-container--visible' : ''}`}>
                    <div className='left-navigation'>
                        <Link onClick={() => { handleClick('store'); handleMenuLink(); }} to='/store' className="nav-link"><h1>store</h1><div className={activeLink === 'store' ? 'underline-active' : 'underline'}></div> </Link>
                        <Link onClick={() => { handleClick('support'); handleMenuLink(); }} to='/support' className="nav-link"><h1>Support</h1><div className={activeLink === 'support' ? 'underline-active' : 'underline'}></div></Link>
                        <CartIcon />




                    </div>
                    <div className='right-navigation'>

                        {
                            currentUser ? (
                                <Link to='/' onClick={() => { signOutHandler(); handleMenuLink(); }} className="nav-link">
                                    <UserLogo className='logged-user-logo' />
                                    <h1>Log Out</h1>
                                    <div className='underline'></div>
                                </Link>
                            ) : (<Link onClick={() => { handleClick('login'); handleMenuLink(); }} to='/login' className="nav-link">
                                <UserLogo className='user-logo' />
                                <h1>Log In</h1>
                                <div className={activeLink === 'login' ? 'underline-active' : 'underline'} ></div>
                            </Link>)
                        }

                        {

                            currentUser ? (

                                <div onClick={handleMenuLink} className="nav-link">{currentUser.displayName}</div>
                            ) : (
                                <Link onClick={() => { handleClick('register'); handleMenuLink(); }} to='/register' className="nav-link"><h1>register</h1></Link>
                            )
                        }

                    </div>

                </div>
                <div onClick={menuToggle} className={`navigation-menu-button ${isButtonClicked ? 'navigation-menu-button--active' : ''}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

            <Outlet />
        </Fragment>
    )

}

export default Navigation;