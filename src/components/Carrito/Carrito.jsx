import React, { useContext } from 'react';
import './Carrito.css';
import { CardContext, cardsContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';

//MUI
import { Button, Card, CardContent, Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Carrito = () => {
    const { cardList, deleteItem, deleteAllItems, calculoTotalCompra } = useContext(cardsContext);

    const navigateForm = useNavigate();

    return (
        <>
            {cardList.map((item) => (
                <Card className="carrito-container" key={item.id}>
                    <div>
                        <CardContent className="carrito-div">
                            <Typography color="text.secondary">{item.name} </Typography>
                            <Typography color="text.secondary">
                                Cantidad: {item.cantidad}
                            </Typography>
                            <Typography color="text.secondary">
                                Precio por item: {item.price}
                            </Typography>
                            <Typography color="text.secondary">
                                Subtotal:{item.cantidad * item.price}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <IconButton size="small" onClick={() => deleteItem(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </CardContent>
                    </div>
                </Card>
            ))}
            {
                <div className="subtotal-compra">
                    <Typography color="text.secondary">Total:$ {calculoTotalCompra()}</Typography>
                </div>
            }
            {
                <div className="btn-limpiar-carrito">
                    <Button
                        variant="outlined"
                        color="error"
                        size="big"
                        onClick={() => {
                            deleteAllItems();
                        }}
                    >
                        {' '}
                        LimpiarCarrito{' '}
                    </Button>
                    <Button
                        size="big"
                        variant="contained"
                        color="success"
                        onClick={() => {
                            if (cardList.length > 0) {
                                navigateForm('/formcarrito');
                            }
                        }}
                    >
                        {' '}
                        Checkout{' '}
                    </Button>
                </div>
            }
        </>
    );
};

export default Carrito;
