import React, { useEffect, useState } from 'react';
import { Carousel, Image, Container, Card } from 'react-bootstrap';
import DetailProduct from './DetailProduct';
import { productos } from '../../productos';
import useCarousel from '../../Hooks/useCarousel';

const DetailMostSeller = () => {
    const [carga, setcarga] = useState(false)
    const { currentIndex, goToIndex } = useCarousel(productos.aprobados.length);
    const [paginas, setPaginas] = useState([]);
    const [paginasMobile, setPaginasMobile] = useState([]);

    /* Control de carga */
    const dividirProductos = (productos) => {
        const paginasTemp = [];
        for (let i = 0; i < (productos).length; i += 5) {
            paginasTemp.push(productos.slice(i, i + 5));
        }
        return paginasTemp;
    };
    const dividirProductosMobile = (productos) => {
        const paginasTemp = [];
        for (let i = 0; i < (productos).length; i += 1) {
            paginasTemp.push(productos.slice(i, i + 1));
        }
        return paginasTemp;
    };
    useEffect(() => {
        if (productos) {
            const paginasDivididas = dividirProductos(productos.aprobados);
            setPaginas(paginasDivididas);
            const paginasDivididasMobile = dividirProductosMobile(productos.aprobados);
            setPaginasMobile(paginasDivididasMobile);
            setcarga(true);
        }
    }, []);

    return (
        <Container className=' m-auto mt-5 mb-5 bg-white border border-opacity-100 rounded'>
            <h2 className='fs-2 m-4'>Lo mas vendido!</h2>
            {
                carga ?
                    (<Container className=''>
                        <Carousel className='carouselEscritorio' activeIndex={currentIndex} onSelect={goToIndex}>
                        {paginas.map((productosPagina, index) => (
                            <Carousel.Item key={index}>
                                <Container className='d-flex justify-content-center'>
                                    {productosPagina.map((producto, innerIndex) => (
                                        <DetailProduct
                                            className="d-flex"
                                            key={innerIndex}
                                            orden={index * 5 + innerIndex}
                                            nombre={producto.Nombre}
                                            precio={producto.Precio}
                                            descripcion={producto.Descripcion}
                                            vendedor={producto.Vendedor}
                                            imagen={producto.imageUrl}
                                        />
                                    ))}
                                </Container>
                            </Carousel.Item>
                        ))}
                        </Carousel>
                        <Carousel className="carousel-mobile" activeIndex={currentIndex} onSelect={goToIndex}>
                        {paginasMobile.map((productosPagina, index) => (
                            <Carousel.Item key={index}>
                                <Container className='d-flex justify-content-center'>
                                    {productosPagina.map((producto, innerIndex) => (
                                        <DetailProduct
                                            className="d-flex"
                                            key={innerIndex}
                                            orden={index * 1 + innerIndex}
                                            nombre={producto.Nombre}
                                            precio={producto.Precio}
                                            descripcion={producto.Descripcion}
                                            vendedor={producto.Vendedor}
                                            imagen={producto.imageUrl}
                                        />
                                    ))}
                                </Container>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </Container>)
                    :
                    <></>
            }
        </Container>
    );
};

export default DetailMostSeller;