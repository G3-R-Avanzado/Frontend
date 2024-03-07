import React from 'react';
import { usuario } from '../../usuario';
import { Button,Container } from 'react-bootstrap';

const StartUser = (props) => {
    return (
        <div>
            <h1 className='fs-3'>¡ Bienvenido ${usuario.FullName} !</h1>
            <h2 className='fs-6'>¿Que desea hacer el dia de hoy?</h2>
            <section>
                <Container>
                    <Button id='BtnAdministrar'className='border rounded'>
                        Ver mis publicaciones
                        <img src="" alt="" />
                    </Button>
                </Container>
                <Container>
                    <Button id='BtnVender' className='border rounded'>
                        <img src="" alt="" />
                        Vender algo!
                    </Button>
                </Container>
            </section>
        </div>
    );
};

export default StartUser;