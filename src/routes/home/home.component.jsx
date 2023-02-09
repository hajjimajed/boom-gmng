import './home.styles.scss'
import { Outlet } from "react-router-dom";

import SlideShow from '../../components/slide-show/slide-show.component';

const Home = () => {

    return (
        <div>

            <Outlet />

            <SlideShow />


        </div>
    )

}

export default Home;