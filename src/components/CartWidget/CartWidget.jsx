import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartWidget.css';
import { cardsContext } from '../context/CardContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const { cardList } = useContext(cardsContext);
    const navigateCart = useNavigate();

    const totalDeProductos = () => {
        return cardList.length
            ? cardList.reduce((prev, curr) => {
                  return (prev += curr.cantidad);
              }, 0)
            : 0;
    };

    return (
        <div className="cart-widget-container">
            <button
                onClick={() => navigateCart('/carrito')}
                style={{ display: cardList.length > 0 ? 'block' : 'none' }}
            >
                {totalDeProductos()}
            </button>
            <ShoppingCartIcon />
        </div>
    );
};

export default CartWidget;
