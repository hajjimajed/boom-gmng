import './store-navigation.styles.scss'

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { useNavigate } from 'react-router-dom';

const StoreNavigation = () => {

    const navigate = useNavigate();

    const { productsMap } = useContext(ProductsContext)

    return (
        <div className='store-side-menu'>
            <div className="store-link-container" onClick={() => {
                navigate('/store')
            }}><h1 className="store-link">All Games</h1><div className='underline'></div></div>
            {
                Object.keys(productsMap).map(title => {
                    return <div onClick={() => {
                        navigate(`${title.toLowerCase()}`)
                    }} className="store-link-container"><h1 key={title} className="store-link">{title}</h1><div className='underline'></div></div>
                })
            }
        </div>
    )
}

export default StoreNavigation;