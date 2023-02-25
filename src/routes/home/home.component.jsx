import './home.styles.scss'
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {

    return (
        <div className='home'>

            <Directory />
            <Footer />
            <Outlet />
        </div>
    )

}

export default Home;