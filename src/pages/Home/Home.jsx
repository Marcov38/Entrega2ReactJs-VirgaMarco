import React, { useContext, useEffect, useState } from 'react';
import CardProducts from '../../components/CardProducts/CardProducts';
import ItemListContainer from '../../components/ItemListContainer/itemlistcontainer';

import './home.css';
import { cardsContext } from '../../components/context/CardContext';

const Home = () => {
    const { productList, isLoading } = useContext(cardsContext);
    return (
        <div>
            <ItemListContainer greeting="Nuestras tarjetas son 100% virtuales y con opcion a modificaciones" />
            <div className="card-container">
                {isLoading ? (
                    <div className="skeleton-container">
                        <div className="skeleton-card"></div>
                        <div className="skeleton-card"></div>
                        <div className="skeleton-card"></div>
                    </div>
                ) : (
                    productList
                        .filter((x) => x.featured)
                        .map((product) => (
                            <CardProducts product={product} showDetails={true} key={product.id} />
                        ))
                )}
            </div>
        </div>
    );
};

export default Home;
