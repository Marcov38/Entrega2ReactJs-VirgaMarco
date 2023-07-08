import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB2lMEMQqJq7LzT_PCFaTERKBwDCIU-zKI',
    authDomain: 'himyparty.firebaseapp.com',
    projectId: 'himyparty',
    storageBucket: 'himyparty.appspot.com',
    messagingSenderId: '631224046704',
    appId: '1:631224046704:web:b0693695d1bdc1701e10b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
