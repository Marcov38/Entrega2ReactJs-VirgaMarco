import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { CardContext } from './components/context/CardContext';
import Carrito from './components/Carrito/Carrito';
import CartForm from './components/CartForm/CartForm';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <CardContext>
                    <Header />
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/formcarrito" element={<CartForm />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </CardContext>
            </BrowserRouter>
        </div>
    );
}

export default App;
