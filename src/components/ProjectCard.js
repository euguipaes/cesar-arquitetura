import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'

function ProjectCard() {
  return (
  <Container fluid >
    <Row className='projectCard'>
      <Col><img src={project1} /></Col>
      <Col><img src={project2} /></Col>
    </Row>
  </Container>
    // <section className='projectsSection'>
    //   <div className='projectsCard'>
    //     <Card style={{ width: '50%' }} className='cardProject border-dark'>
    //       <Card.Img variant="top" src={project1} />
    //     </Card>
    //     <Card style={{ width: '50%' }} className='cardProject border-dark'>
    //       <Card.Img variant="top" src={project2} />
    //     </Card>
    //   </div>
    // </section>
  );
}
export {ProjectCard} 
