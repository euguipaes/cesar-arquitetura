import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import project5 from '../assets/img/project5.png'
import project6 from '../assets/img/project6.jpg'
import project7 from '../assets/img/project7.jpg'
import project8 from '../assets/img/project8.jpg'
import project9 from '../assets/img/project9.JPG'
import project10 from '../assets/img/project10.JPEG'

export const Projects = () => {
    return (
    <div className="projects" id="projects">
        <Container fluid>
        <Row>
            <Col><img src={project3}/></Col>
            <Col><img src={project4}/></Col>
            <Col><img src={project5}/></Col>    
        </Row>
        <Row>
            <Col><img src={project9}/></Col>
            <Col><img src={project10}/></Col>
        </Row>
        <Row>
            <Col><img src={project6}/></Col>
            <Col><img src={project7}/></Col>
            <Col><img src={project8}/></Col>
        </Row>
        </Container>
        </div>
    )
}