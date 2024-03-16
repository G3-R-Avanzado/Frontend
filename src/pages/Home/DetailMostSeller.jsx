import React, { useEffect, useState } from 'react';
import { Carousel, Image, Container, Card } from 'react-bootstrap';
import DetailProduct from './DetailProduct';
import { productos } from '../../productos';

const DetailMostSeller = () => {
    const [carga, setcarga] = useState(false)
    
    useEffect(()=>{
        if (productos) {
            setcarga(true)
            console.log(productos);
        }

    },[])
    return (
        <>
        <h2 className='fs-2 m-4'>Lo mas vendido!</h2>
        {
            carga ?
                (<Container>
                <Carousel.Item >
                    {(productos.aprobados).map((producto, index) => (
                        <DetailProduct key={index} orden={index} 
                        nombre={producto.Nombre}
                        precio={producto.Precio}
                        descripcion={producto.Descripcion}
                        vendedor={producto.Vendedor} />
                    ))}
                </Carousel.Item>
                
                </Container>)
                :
                <></>
            }
            </>
    );
};

            export default DetailMostSeller;