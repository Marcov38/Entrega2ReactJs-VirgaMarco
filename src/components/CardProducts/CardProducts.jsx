import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './CardProducts.css';

const CardProducts = ({ img, name, price, description, productId, className, showDetails }) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ height: '100%' }} className={className + ' card-product'}>
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
                        {price}
                    </Typography>
                </CardContent>
                <CardActions className="card-product-button-container">
                    <Button size="small">Comprar</Button>
                    {showDetails && (
                        <Button size="small" onClick={() => navigate(`/product/${productId}`)}>
                            Ver Detalles
                        </Button>
                    )}
                </CardActions>
            </div>
        </Card>
    );
};

export default CardProducts;
