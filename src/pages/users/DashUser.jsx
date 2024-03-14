import React from 'react';
import { Container } from 'react-bootstrap';

const DashUser = () => {
    const { user, rol } = useSelector((store) => store.auth);

    return (
        <>
            <h1 className='fs-1 text-black'>Mis publicaciones</h1>
            <Container>
                <h1>Dashboard de {user.username} - {user.rol}</h1>
            </Container>
        </>
    );
};

export default DashUser;