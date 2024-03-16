import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const DetailProduct = ({imagen,descripcion,nombre ,orden,vendedor,precio}) => {
    const [carga, setcarga] = useState(false)
    /* Control de carga  */
    useEffect(()=>{
        if (imagen) {
            setcarga(true)
        }
    },[])    
    return (
        <>{
            carga?
            <Card key={orden} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {precio}
                    </Card.Text>
                    <Button variant="primary">Comprar!</Button>
                </Card.Body>
            </Card>
            :
            <></>
        } 
        </>
    );
};

export default DetailProduct;