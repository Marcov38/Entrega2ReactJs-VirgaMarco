import { Button, CardActionArea, CardActions, Grid, Stack, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './CardProducts.css';
import { useContext, useState } from 'react';
import { cardsContext } from '../context/CardContext';
import Swal from 'sweetalert2';

const CardProducts = ({ product, showDetails }) => {
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const { img, name, price, description, id, className } = product;
    const navigate = useNavigate();
    const { addCardToCart } = useContext(cardsContext);
    return (
        <Card sx={{ height: '100%', width: '350px' }} className={className + ' card-product'}>
            <CardMedia component="img" image={img} alt="Imagen tarjeta cumpleaños" />
            <div className="card-product-data">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {price}
                    </Typography>
                </CardContent>
                <CardActions className="card-product-button-container">
                    {showDetails && (
                        <Button size="small" onClick={() => navigate(`/product/${id}`)}>
                            Ver Detalles
                        </Button>
                    )}
                    {!showDetails && (
                        <Stack direction="row" spacing={1} flex={1}>
                            <Stack
                                spacing={1}
                                alignItems="center"
                                justifyContent="flex-start"
                                direction="row"
                            >
                                <Button variant="outlined" onClick={handleDecrement}>
                                    <span>-</span>
                                </Button>
                                <TextField
                                    variant="outlined"
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value);
                                        if (!isNaN(value) && value > 0) {
                                            setQuantity(value);
                                        } else {
                                            Swal.fire(
                                                'Se debe ingresar un numero mayor a 0, no se permiten letras.'
                                            );
                                        }
                                    }}
                                />
                                <Button variant="outlined" onClick={handleIncrement}>
                                    <span>+</span>
                                </Button>
                            </Stack>
                            <Button size="small" onClick={() => addCardToCart(product, quantity)}>
                                Agregar al Carrito
                            </Button>
                        </Stack>
                    )}
                </CardActions>
            </div>
        </Card>
    );
};

export default CardProducts;
