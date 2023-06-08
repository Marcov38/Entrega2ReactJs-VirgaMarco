import React from 'react';
import './productDetails.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../mocks/products';
import CardProducts from '../../components/CardProducts/CardProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const product = getProduct(id);

    return (
        <div>
            <CardProducts
                key={product.productId}
                name={product.name}
                price={`El precio es $${product.price}`}
                description={product.description}
                img={product.img}
                productId={product.productId}
                className={'product-detail-card'}
                showDetails={false}
            />
        </div>
    );
};

export default ProductDetails;
