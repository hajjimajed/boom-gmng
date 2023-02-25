import './home.styles.scss'
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {

    return (
        <div className='home'>

            <Directory />

            <Outlet />
        </div>
    )

}

export default Home;