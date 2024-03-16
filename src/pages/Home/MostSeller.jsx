import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button, Container, Image } from 'react-bootstrap';
import { productos } from '../../productos';
import DetailMostSeller from './DetailMostSeller';
import logo1 from "../../assets/logo1.png"
import useCarousel from '../../Hooks/useCarousel';

const MostSeller = () => {
    const { currentIndex, goToIndex } = useCarousel(productos.portada.length);

    return (
        <>
        <Carousel    activeIndex={currentIndex} onSelect={goToIndex}>
            {productos.portada.map((item, index) => (
                <Carousel.Item   key={index}>
                    <Image src={item.src} id='carousel' className=' align-self-center objet-fit-contain' />
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    );

};

export default MostSeller;