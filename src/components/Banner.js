import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from 'react';

import headerImage from '../assets/images/header-image.svg'

export const Banner = () => {
    


    return(
        <section className= "banner" id="home">
            <Container>
                <Row className= "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"Hello, I'm Drew!"}</h1>
                        <p>An aspiring Software Engineer, majoring in Computer Science at the University of North Dakota.</p>
                        <button onClick={() => console.log('connect')}>Contact Me<ArrowRightCircle size={20} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}