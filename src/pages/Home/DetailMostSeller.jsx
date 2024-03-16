import React, { useEffect, useState } from 'react';
import { Carousel, Image, Container, Card } from 'react-bootstrap';
import DetailProduct from './DetailProduct';
import { productos } from '../../productos';
import useCarousel from '../../Hooks/useCarousel';

const DetailMostSeller = () => {
    const [carga, setcarga] = useState(false)
    const { currentIndex, goToIndex } = useCarousel(productos.aprobados.length);
    /* Control de carga */
    useEffect(() => {
        if (productos) {
            setcarga(true)

            for (let i = 0; i < productos.aprobados.length; i++) {
                
                
            }
        }

    }, [])
    return (
        <Container className='m-5 bg-white border border-opacity-100 rounded'>
            <h2 className='fs-2 m-4'>Lo mas vendido!</h2>
            {
                carga ?
                    (<Container>
                        
                        <Carousel activeIndex={currentIndex} onSelect={goToIndex}>

                            <Carousel.Item >
                                <Container className='d-flex'>
                                {(productos.aprobados).map((producto, index) => (
                                    <DetailProduct
                                        className="d-flex"
                                        key={index}
                                        orden={index}
                                        nombre={producto.Nombre}
                                        precio={producto.Precio}
                                        descripcion={producto.Descripcion}
                                        vendedor={producto.Vendedor}
                                        imagen={producto.imageUrl} />
                                        
                                ))}
                                </Container>
                            </Carousel.Item>

                        </Carousel>
                    </Container>)
                    :
                    <></>
            }
        </Container>
    );
};

export default DetailMostSeller;