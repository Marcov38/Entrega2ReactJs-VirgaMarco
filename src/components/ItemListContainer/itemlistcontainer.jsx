import React from 'react';
import './itemlist.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="IntrodContainer">
            <h1 className="IntrodParagraph">{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
