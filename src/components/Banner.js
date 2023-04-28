import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";
import logo from "../assets/img/logo-symbol.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <img src={logo} className="banner-logo"></img>
                  <h1 id="title">César Augusto</h1>
                  <h1 id="subtitle">Arquitetura</h1>
                  <p>Fazendo de simples traços a projeção de sonhos.</p>
                  <a id="contato"href="#connect"><button onClick={() => console.log('connect')}>Entre em contato<ArrowRightCircle size={25}/></button></a>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
