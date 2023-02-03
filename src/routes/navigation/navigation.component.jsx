import './navigation.styles.scss'
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as MainLogo } from '../../assets/boom-logo.svg';
import { ReactComponent as UserLogo } from '../../assets/logIn.svg'

import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }


    return (
        <Fragment>


            <div className='navigation'>
                <div className='left-navigation'>
                    <Link to='/' className='main-logo-container'>
                        <MainLogo className='main-logo' />
                    </Link>
                    <Link to='/store' className="nav-link">store <div className='underline'></div> </Link>
                    <Link to='/news' className="nav-link">News <div className='underline'></div></Link>
                    <Link to='/support' className="nav-link">Support <div className='underline'></div></Link>
                </div>
                <div className='right-navigation'>

                    {
                        currentUser ? (
                            <a onClick={signOutHandler} className="nav-link">
                                <UserLogo className='user-logo' />
                                <span>Log Out</span>
                                <div className='underline'></div>
                            </a>
                        ) : (<Link to='/login' className="nav-link">
                            <UserLogo className='user-logo' />
                            <span>Log in</span>
                            <div className='underline'></div>
                        </Link>)
                    }

                    {

                        currentUser ? (

                            <div className="nav-link">{currentUser.displayName}</div>
                        ) : (
                            <Link to='/register' className="nav-link">register</Link>
                        )
                    }

                </div>
            </div>

            <Outlet />
        </Fragment>
    )

}

export default Navigation;