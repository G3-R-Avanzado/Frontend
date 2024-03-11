import React, { useEffect, useState } from 'react';
import { Carousel, Image, Container, Card } from 'react-bootstrap';
import DetailProduct from './DetailProduct';

const DetailMostSeller = ({ productos,orden }) => {
    const [carga, setcarga] = useState(false)
    useEffect(()=>{
        if (productos !== null) {
            setcarga(true)
            console.log(productos);
        }

    },[])
    return (
        <>
        {
            carga ?
                (<Carousel.Item key={orden}>
                    {productos.map((producto, index) => (
                        <DetailProduct key={index} orden={index} 
                        nombre={producto.Nombre}
                        precio={producto.Precio}
                        descripcion={producto.Descripcion}
                        vendedor={producto.Vendedor} />
                    ))}
                </Carousel.Item>)
                :
                <></>
            }
            </>
    );
};

            export default DetailMostSeller;