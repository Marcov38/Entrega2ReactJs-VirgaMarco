import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, getDoc, doc, getDocFromServer } from 'firebase/firestore';

//TARJETAS
import tarjeta1 from '../assets/Tarjeta1.png';
import tarjeta2 from '../assets/Tarjeta2.png';
import tarjeta3 from '../assets/Tarjeta3.jpg';
import tarjeta4 from '../assets/Tarjeta4.png';
import tarjeta5 from '../assets/tarjeta5.jpg';
import tarjeta6 from '../assets/tarjeta6.jpg';

//FIREBASE
import { db } from '../firebase/firebaseConfig';

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
        img: tarjeta4,
        productId: 3,
        featured: true,
    },
    {
        name: 'Tarjeta Casamiento nº1',
        price: 5000,
        description:
            'Modelo de tarjeta estatico, no personalizable completamente,consultas por formulario o telefono.',
        img: tarjeta3,
        productId: 4,
        featured: false,
    },
    {
        name: 'Tarjeta Casamiento nº2',
        price: 10000,
        description:
            'Modelo de tarjeta dinamico, personalizable en algunos estilos y formas,consultas por formulario o telefono.',
        img: tarjeta5,
        productId: 5,
        featured: true,
    },
    {
        name: 'Tarjeta Casamiento nº3',
        price: 5300,
        description:
            'Modelo de tarjeta 100% modificable con lo que necesites, consultas por formulario o telefono.',
        img: tarjeta6,
        productId: 6,
        featured: false,
    },
];

const getProduct = (id) => {
    return mockData.find((x) => x.productId === Number(id));
};

export { mockData, getProduct };

const tarjetasCollection = collection(db, 'tarjetas');

export const getAllDocuments = async () => {
    try {
        const querySnapshot = await getDocs(tarjetasCollection);
        return querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
    } catch (error) {
        console.error('Error al obtener los documentos: ', error);
        return [];
    }
};

export const getDocumentById = async (id) => {
    try {
        const documentRef = doc(db, 'tarjetas', id);
        const documentSnapshot = await getDocFromServer(documentRef);

        if (documentSnapshot.exists()) {
            const productData = {
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
            };
            console.log('Producto encontrado:', productData);
            return productData;
        } else {
            console.log('El documento no existe.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
        return null;
    }
};

getDocumentById('RheB5jBuAouiu36wzS1c');

//FUNCION PARA CREAR EL MOCKDATA DESDE EL PROYECTO
//const tarjetasCollection = collection(db, 'tarjetas');

/* mockData.forEach(async (tarjeta) => {
    try {
        const docRef = await addDoc(tarjetasCollection, tarjeta);
        console.log('Documento agregado con ID: ', docRef.id);
    } catch (error) {
        console.error('Error al agregar el documento: ', error);
    }
}); */
