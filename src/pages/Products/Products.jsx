import React from 'react';
import './products.css';
import { mockData } from '../../mocks/products';
import CardProducts from '../../components/CardProducts/CardProducts';

const Products = () => {
    return (
        <div className="card-container">
            {mockData.map((product) => (
                <CardProducts
                    key={product.productId}
                    name={product.name}
                    price={`El precio es $${product.price}`}
                    description={product.description}
                    img={product.img}
                    productId={product.productId}
                />
            ))}
        </div>
    );
};

export default Products;
