import React from 'react';
import CardProducts from '../../components/CardProducts/CardProducts';
import ItemListContainer from '../../components/ItemListContainer/itemlistcontainer';

import { mockData } from '../../mocks/products';

import './home.css';

const Home = () => {
    return (
        <div>
            <ItemListContainer greeting="Hecha un vistazo a algunos de nuestros productos" />
            <div className="card-container">
                {mockData
                    .filter((x) => x.featured)
                    .map((product) => (
                        <CardProducts
                            key={product.productId}
                            name={product.name}
                            price={`El precio es $${product.price}`}
                            description={product.description}
                            img={product.img}
                            productId={product.productId}
                            showDetails={true}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
