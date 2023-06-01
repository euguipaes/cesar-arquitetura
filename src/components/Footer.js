import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/cesar-augusto-paes-205a5b25a/"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/arquitetojf.cesar/"
                target="_blank"
              >
                <img src={navIcon2} alt="instagram" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5532991271237"
                target="_blank"
              >
                <img src={navIcon3} alt="whatsapp" />
              </a>
            </div>
            <p>
              Copyright 2023. Todos os direitos reservados. | César Augusto
              Arquitetura | Desenvolvido por{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/guilherme-paes-7b5591133/"
                  target="_blank"
                >
                  Guilherme Paes.
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
