import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";
import partner5 from "../assets/img/partner5.png";
import Carousel from 'react-multi-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-multi-carousel/lib/styles.css';

export const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="partners" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="partners-bx wow zoomIn">
                        <h2>Parceiros</h2>
                        <p>Essas são algumas empresas parceiras que confiaram no meu trabalho.</p>
                        <Row>
                          <Col>
                            <div className="item">
                                <img src={partner1} alt="Image" />
                                <h5>Paraibuna Embalagens</h5>
                            </div>
                          </Col>
                            <Col>
                              <div className="item">
                                  <img src={partner2} alt="Image" />
                                  <h5>Prefeitura Municipal de Limeira</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">
                                  <img src={partner5} alt="Image" />
                                  <h5>Instituição Adventista de Ensino</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">
                                  <img src={partner3} alt="Image" />
                                  <h5>Centro Universitário Adventista de São Paulo</h5>
                              </div>
                            </Col>
                            <Col>
                              <div className="item">
                                  <img src={partner4} alt="Image" />
                                  <h5>Igreja Adventista</h5>
                              </div>
                            </Col>
                            </Row>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
