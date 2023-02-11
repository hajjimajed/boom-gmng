import './home.styles.scss'
import { Outlet } from "react-router-dom";

import CardShow from '../../components/card-show/card-show.component';

const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
    "https://i.ibb.co/pxw57N4/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-01-1920x1080-89160030c92b.jpg"
];

const Home = () => {

    return (
        <div className='home'>

            <Outlet />

            <CardShow images={images} />


        </div>
    )

}

export default Home;