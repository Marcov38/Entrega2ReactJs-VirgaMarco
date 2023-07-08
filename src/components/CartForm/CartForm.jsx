import { React, useState } from 'react';
import './cartform.css';
import Swal from 'sweetalert2';

// MUI
import { FormControl, Input, FormLabel, InputLabel, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const cartForm = () => {
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(correo, nombre, apellidos, telefono);
        setCorreo('');
        setNombre('');
        setApellidos('');
        setTelefono('');
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <FormControl>
                <InputLabel htmlFor="correo-electronico">Correo electronico</InputLabel>
                <Input
                    onChange={(event) => setCorreo(event.target.value)}
                    value={correo}
                    type="email"
                    id="correo-electronico"
                    aria-describedby="correo-electronico"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="nombre-apellidos">Nombre</InputLabel>
                <Input
                    onChange={(event) => setNombre(event.target.value)}
                    value={nombre}
                    type="Text"
                    id="nombre-contacto"
                    aria-describedby="nombre-apellidos"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="numero-contacto">Apellidos</InputLabel>
                <Input
                    onChange={(event) => setApellidos(event.target.value)}
                    value={apellidos}
                    type="Text"
                    id="apellido-contacto"
                    aria-describedby="numero-contacto"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="numero-contacto">Numero de contacto</InputLabel>
                <Input
                    onChange={(event) => setTelefono(event.target.value)}
                    value={telefono}
                    type="Number"
                    id="numero-contacto"
                    aria-describedby="numero-contacto"
                />
            </FormControl>

            <div>
                <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    type="submit"
                    onClick={() => {
                        Swal.fire('Compra realizada correctamente');
                    }}
                >
                    Send
                </Button>
            </div>
        </form>
    );
};

export default cartForm;
