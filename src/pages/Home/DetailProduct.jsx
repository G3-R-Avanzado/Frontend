import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const DetailProduct = ({ producto,descripcion,nombre ,orden,vendedor,precio}) => {
    const [carga, setcarga] = useState(false)
    useEffect(()=>{
        if (producto !== null) {
            setcarga(true)
            console.log(nombre);
            console.log(precio);
            console.log(descripcion);
            console.log(vendedor);
        }
    },[])    
    return (
        <>{
            carga?
            <Card key={orden} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
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