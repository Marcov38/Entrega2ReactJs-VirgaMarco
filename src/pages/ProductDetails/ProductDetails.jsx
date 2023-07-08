import React, { useEffect, useState } from 'react';
import './productDetails.css';
import { useParams } from 'react-router-dom';
import { getDocumentById } from '../../mocks/products';
import CardProducts from '../../components/CardProducts/CardProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getDocumentById(id);
            setProduct(productData);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="skeleton-container">
                <div className="skeleton-card"></div>
            </div>
        );
    }

    return (
        <div className="product-details-container">
            <CardProducts product={product} showDetails={false} />
        </div>
    );
};

export default ProductDetails;
