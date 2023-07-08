import React from 'react';
import './products.css';
import CardProducts from '../../components/CardProducts/CardProducts';
import { useContext } from 'react';
import { cardsContext } from '../../components/context/CardContext';

const Products = () => {
    const { productList, isLoading } = useContext(cardsContext);
    return (
        <div className="card-container">
            {isLoading ? (
                <div className="skeleton-container">
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                </div>
            ) : (
                productList.map((product) => <CardProducts product={product} key={product.id} />)
            )}
        </div>
    );
};

export default Products;
