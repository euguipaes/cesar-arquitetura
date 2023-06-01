import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImg from "../assets/img/about.JPG";
<script
  src="https://kit.fontawesome.com/0b64daf7ff.js"
  crossorigin="anonymous"
></script>;

function About() {
  return (
    <Container fluid id="about">
      <Row>
        <Col xs={5} className="aboutImg">
          <img src={aboutImg} id="aboutImg" />
        </Col>
        <Col xs={7}>
          <div class="sobre_titulo">
            <br />
            <br />
            <br />
            <h1>César Augusto</h1>
            <div aria-label="seção apenas de ilustrações de botões">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="sobre_texto">
            <p>
              Arquiteto e Urbanista com mais de 150 projetos entregues, há mais
              de 7 anos fazendo gestão e acompanhamento de obras. Vasta
              experiência em projetos de residência e de grandes escalas como
              escolas, hospitais e igrejas.
              <br />
            </p>
          </div>
          <Row className="aboutInfo">
            <Col>
              <h4>FORMAÇÃO ACADÊMICA</h4>
              <br />
              <span className="year">2019</span>
              <p>Pós graduação em Arquitetura e Interiores</p>
              <p className="institution">FACULDADE UNYLEYA</p>
              <br />
              <span className="year">2017</span>
              <p>Graduação em Arquitetura e Urbanismo</p>
              <p className="institution">
                CENTRO UNIVERSITÁRIO ADVENTISTA DE SÃO PAULO
              </p>
            </Col>
            <Col>
              <h4>CURSOS E PREMIAÇÕES</h4>
              <br />
              <span className="year">2017</span>
              <p>Curso de Alvenaria Estrutural</p>
              <p className="institution">UNICAMP</p>
              <br />
              <span className="year">2016</span>
              <p>Propriedades dos Materiais Metálicos</p>
              <p className="institution">ARCELOR MITTAL</p>
              <br />
              <span className="year">2016</span>
              <p>Prêmio | Reforma do Edificio Prada</p>
              <p className="institution">ENIAC</p>
            </Col>
            <Row className="contactInfo">
              <h4>
                <br />
                CONTATO
              </h4>
              <br />
              <span>
                <br />
                <i class="fa-solid fa-envelope"></i>{" "}
                c.a.arquitetoeurbanista@hotmail.com
              </span>
              <br />
              <span>
                <i class="fa-solid fa-phone"></i> (32) 99127-1237
              </span>
              <br />
              <span>
                <i class="fa-solid fa-house"></i> Juiz de Fora, Minas Gerais
              </span>
              <br />
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { About };
