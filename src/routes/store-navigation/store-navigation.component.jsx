import './store-navigation.styles.scss'

import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { useNavigate } from 'react-router-dom';

const StoreNavigation = () => {

    const navigate = useNavigate();

    const { productsMap } = useContext(ProductsContext)

    return (
        <div className='store-side-menu'>
            {
                Object.keys(productsMap).map(title => {
                    return <div className="store-link-container"><h1 key={title} onClick={() => {
                        navigate(`${title.toLowerCase()}`)
                    }} className="store-link">{title}</h1><div className='underline'></div></div>
                })
            }
        </div>
    )
}

export default StoreNavigation;