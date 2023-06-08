//TARJETAS
import tarjeta1 from '../assets/Tarjeta1.png';
import tarjeta2 from '../assets/Tarjeta2.png';
import tarjeta3 from '../assets/Tarjeta3.jpg';

const mockData = [
    {
        name: 'Tarjeta Cumpleaños nº1',
        price: 1800,
        description:
            'Modelo de tarjeta estatico, no personalizable completamente,consultas por formulario o telefono.',
        img: tarjeta1,
        productId: 1,
        featured: true,
    },
    {
        name: 'Tarjeta Cumpleaños nº2',
        price: 2000,
        description:
            'Modelo de tarjeta dinamico, personalizable en algunos estilos y formas,consultas por formulario o telefono.',
        img: tarjeta2,
        productId: 2,
        featured: false,
    },
    {
        name: 'Tarjeta Cumpleaños nº3',
        price: 3000,
        description:
            'Modelo de tarjeta 100% modificable con lo que necesites, consultas por formulario o telefono.',
        img: tarjeta3,
        productId: 3,
        featured: true,
    },
    {
        name: 'Tarjeta Cumpleaños nº4',
        price: 5000,
        description:
            'Modelo de tarjeta estatico, no personalizable completamente,consultas por formulario o telefono.',
        img: tarjeta1,
        productId: 4,
        featured: false,
    },
    {
        name: 'Tarjeta Cumpleaños nº5',
        price: 10000,
        description:
            'Modelo de tarjeta dinamico, personalizable en algunos estilos y formas,consultas por formulario o telefono.',
        img: tarjeta2,
        productId: 5,
        featured: true,
    },
    {
        name: 'Tarjeta Cumpleaños nº6',
        price: 5300,
        description:
            'Modelo de tarjeta 100% modificable con lo que necesites, consultas por formulario o telefono.',
        img: tarjeta3,
        productId: 6,
        featured: false,
    },
];

const getProduct = (id) => {
    return mockData.find((x) => x.productId === Number(id));
};

export { mockData, getProduct };
