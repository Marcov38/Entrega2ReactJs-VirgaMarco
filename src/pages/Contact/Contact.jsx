import { React, useState } from 'react';
import './contact.css';

// MUI
import { FormControl, Input, FormLabel, InputLabel, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    const [value, setValue] = useState('');
    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');
    const [motivoContacto, setMotivoContacto] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(value, nombre, contacto, motivoContacto);
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <FormControl>
                <InputLabel htmlFor="correo-electronico">Correo electronico</InputLabel>
                <Input
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    type="email"
                    id="correo-electronico"
                    aria-describedby="correo-electronico"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="nombre-apellidos">Nombre y Apellidos</InputLabel>
                <Input
                    onChange={(event) => setNombre(event.target.value)}
                    value={nombre}
                    type="Text"
                    id="nombre-apellidos"
                    aria-describedby="nombre-apellidos"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="numero-contacto">Numero de contacto</InputLabel>
                <Input
                    onChange={(event) => setContacto(event.target.value)}
                    value={contacto}
                    type="number"
                    id="numero-contacto"
                    aria-describedby="numero-contacto"
                />
            </FormControl>

            <TextField
                onChange={(event) => setMotivoContacto(event.target.value)}
                value={motivoContacto}
                id="standard-multiline-static"
                label="Escribe tu comentario,duda o sugerencia"
                multiline
                rows={4}
                variant="standard"
            />
            <div>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" startIcon={<SendIcon />} type="submit">
                    Send
                </Button>
            </div>
        </form>
    );
};

export default Contact;
