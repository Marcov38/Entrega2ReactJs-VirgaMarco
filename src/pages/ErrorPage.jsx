import React, { useEffect } from 'react';
import ErrorImage from '../assets/ErrorPage.jpg';

const ErrorPage = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = '/';
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Error al cargar esta página</h1>
            <img src={ErrorImage} alt="Error" style={{ width: '100%' }} />
        </div>
    );
};

export default ErrorPage;
