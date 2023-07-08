import React, { createContext, useEffect, useState } from 'react';
import { getAllDocuments } from '../../mocks/products';

const cardsContext = createContext();

const CardContext = (props) => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cardList, setCardList] = useState([]);

    const addCardToCart = (product, quantity) => {
        const index = cardList.findIndex((x) => x.id === product.id);
        if (index === -1) {
            setCardList((prevCard) => [...prevCard, { ...product, cantidad: quantity }]);
        } else {
            const newData = [...cardList];
            newData[index].cantidad += quantity;
            setCardList(newData);
        }
    };

    const deleteItem = (product) => {
        const newCart = cardList.filter((x) => x.id !== product.id);
        setCardList([...newCart]);
    };

    const deleteAllItems = () => {
        setCardList([]);
    };

    const calculoTotalCompra = () => {
        const total = 0;
        const totalCompras = cardList.reduce((prev, curr) => {
            return (prev += parseInt(curr.cantidad) * parseInt(curr.price) + total);
        }, 0);
        return totalCompras;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getAllDocuments();
                setProductList(products);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener los productos: ', error);
                setProductList([]);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <cardsContext.Provider
            value={{
                productList,
                isLoading,
                addCardToCart,
                cardList,
                deleteItem,
                deleteAllItems,
                calculoTotalCompra,
            }}
        >
            {props.children}
        </cardsContext.Provider>
    );
};

export { CardContext, cardsContext };
