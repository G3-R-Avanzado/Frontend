import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button, Container, Image } from 'react-bootstrap';
import { productos } from '../../productos';
import DetailMostSeller from './DetailMostSeller';
import logo1 from "../../assets/logo1.png"
import useCarousel from '../../Hooks/useCarousel';

const MostSeller = () => {
    const { currentIndex, goToNext, goToPrev, goToIndex } = useCarousel(productos.portada.length);

    return (
        <>
        <Carousel    activeIndex={currentIndex} onSelect={goToIndex}>
            {productos.portada.map((item, index) => (
                <Carousel.Item   key={index}>
                    <Image src={item.src} id='carousel' className=' align-self-center objet-fit-contain' />

                   {/*  <Carousel.Caption>
                        <h3>{item.Nombre}</h3>
                        <p>{item.Descripcion}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    );

};

export default MostSeller;