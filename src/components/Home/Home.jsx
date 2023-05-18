import React from 'react'
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/itemlistcontainer';
import CardProducts from '../CardUser/CardProducts';
import "./home.css";

//TARJETAS
import tarjeta1 from "../../assets/Tarjeta1.png"
import tarjeta2 from "../../assets/Tarjeta2.png"
import tarjeta3 from "../../assets/Tarjeta3.jpg"

const Home = () => {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <ItemListContainer greeting="Hecha un vistazo a algunos de nuestros productos" />
            <div className="CardApp">
                <CardProducts className="Cards"
                    name="Tarjeta Cumpleaños nº1"
                    price="El precio es $1800 "
                    description="Modelo de tarjeta estatico, no personalizable completamente,consultas por formulario o telefono."
                    img={tarjeta1}
                />
                <CardProducts className="Cards"
                    name="Tarjeta Cumpleaños nº2"
                    price="El precio es $2000 "
                    description="Modelo de tarjeta dinamico, personalizable en algunos estilos y formas,consultas por formulario o telefono."
                    img={tarjeta2}
                />
                <CardProducts className="Cards"
                    name="Tarjeta Cumpleaños nº3"
                    price="El precio es $3000 "
                    description="Modelo de tarjeta 100% modificable con lo que necesites, consultas por formulario o telefono."
                    img={tarjeta3}
                />
            </div>
        </div>
    )
}

export default Home