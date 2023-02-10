import './home.styles.scss'
import { Outlet } from "react-router-dom";

import Carousel from '../../components/slide-show/slide-show.component';

const SliderData = [
    {
        image: 'https://images.unsplash.com/photo-1675919038472-6ae71f6c56c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1661777227443-77e227eb8d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1676012120403-42a8ae3f998e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1661777227443-77e227eb8d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
]

const Home = () => {

    return (
        <div className='home'>

            <Outlet />

            <Carousel slides={SliderData} />


        </div>
    )

}

export default Home;