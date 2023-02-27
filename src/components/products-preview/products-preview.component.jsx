import './products-preview.styles.scss'

import ProductCard from '../product-card/product-card.component';
import { ReactComponent as Loop } from '../../assets/loop.svg'

import { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


const ProductsPreview = () => {
    const { productsMap } = useContext(ProductsContext);
    const [sortType, setSortType] = useState('default');
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSortTypeChange = (sortType) => {
        setSortType(sortType);
    }

    const sortProducts = (products) => {
        switch (sortType) {
            case 'priceLowToHigh':
                return products.sort((a, b) => a.price - b.price);
            case 'priceHighToLow':
                return products.sort((a, b) => b.price - a.price);
            case 'alphabetical':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return products;
        }
    };

    const searchProducts = (products) => {
        if (searchText === '') {
            return products;
        } else {
            const lowercaseSearchText = searchText.toLowerCase();
            return products.filter(product => product.name.toLowerCase().includes(lowercaseSearchText));
        }
    }

    const sortedProducts = sortProducts(
        Object.values(productsMap).reduce((acc, products) => acc.concat(products), [])
    );

    const searchedAndSortedProducts = searchProducts(sortedProducts);

    return (
        <div className='category-preview-container'>
            <div className='filters-container'>
                <div className='search-container'>
                    <input placeholder='Search Game' className='search-bar' type="text" onChange={handleSearchTextChange} />
                    <Loop className='loop-icon' />
                </div>
                <div className='sort-filter-container'>
                    <label className='sort-label'>Sort :</label>
                    <div className='sort-buttons'>
                        <h1 className={`sort-button ${sortType === 'default' ? 'active' : ''}`} onClick={() => handleSortTypeChange('default')}>Default</h1>
                        <h1 className={`sort-button ${sortType === 'priceLowToHigh' ? 'active' : ''}`} onClick={() => handleSortTypeChange('priceLowToHigh')}>Price to high</h1>
                        <h1 className={`sort-button ${sortType === 'priceHighToLow' ? 'active' : ''}`} onClick={() => handleSortTypeChange('priceHighToLow')}>Price to low</h1>
                        <h1 className={`sort-button ${sortType === 'alphabetical' ? 'active' : ''}`} onClick={() => handleSortTypeChange('alphabetical')}>AZ</h1>
                    </div>
                </div>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='preview'>
                {searchedAndSortedProducts.map((product) =>
                    <motion.div variants={item} key={product.id}>
                        <ProductCard product={product} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    )

}

export default ProductsPreview;