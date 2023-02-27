import './store.styles.scss'

import ProductsPreview from '../../components/products-preview/products-preview.component';
import StoreNavigation from '../store-navigation/store-navigation.component';
import ProductsCategory from '../products-category/products-category.component';
import Footer from '../../components/footer/footer.component'

import { Route, Routes } from 'react-router-dom';

const Store = () => {





    return (

        <>

            <StoreNavigation />
            <Routes>
                <Route index element={<ProductsPreview />} />
                <Route path=':productsCategory' element={<ProductsCategory />}></Route>
            </Routes>

            <Footer />
        </>
    )

}

export default Store;