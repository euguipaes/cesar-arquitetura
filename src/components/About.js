import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import aboutImg from "../assets/img/about.JPG";
<script src="https://kit.fontawesome.com/0b64daf7ff.js" crossorigin="anonymous"></script>


function About() {
    return (
        <Container className='about' fluid>
            <Row className='tabs' id='about'>
                <Col xs={6}><img src={aboutImg} /></Col>
                <Col xs={6}>
                <div class="sobre_titulo">
                    <h1>César Augusto</h1>
                    <div aria-label="seção apenas de ilustrações de botões">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="sobre_texto">
                    <p>Arquiteto e Urbanista com mais de 150 projetos
                        entregues, a mais de 7 anos fazendo gestão e
                        acompanhamento de obras. Vasta experiência
                        em projetos de grandes escalas como, escolas,
                        hospitais e igrejas.
                        <br/>
                    </p>
                </div>
                    <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="education" title="FORMAÇÃO ACADÊMICA">
                    <Container>
                        <Row>
                            <Col xs={1}><span className='year'>2019</span></Col>
                            <Col xs={6}><p>Pós graduação em Arquitetura e Interiores</p></Col>
                            <Col xs={4}><p className='institution'>Faculdade Unyleya</p></Col>
                        </Row>
                        <Row>
                            <Col xs={1}><span className='year'>2017</span></Col>
                            <Col xs={6}><p>Graduação em Arquitetura e Urbanismo</p></Col>
                            <Col xs={4}><p className='institution'>Centro universitário Adventista de São Paulo</p></Col>
                        </Row>
                    </Container>
                    </Tab>
                    <Tab eventKey="titles" title="CURSOS E PREMIAÇÕES">
                    <Container>
                        <Row>
                            <Col xs={1}><span className='year'>2017</span></Col>
                            <Col xs={6}><p>Pós graduação em Arquitetura e Interiores</p></Col>
                            <Col xs={4}><p className='institution'>UNICAMP</p></Col>
                        </Row>
                        <Row>
                            <Col xs={1}><span className='year'>2016</span></Col>
                            <Col xs={6}><p>Propriedades dos Materiais Metálicos</p></Col>
                            <Col xs={4}><p className='institution'>Arcelor Mittal</p></Col>
                        </Row>
                        <Row>
                            <Col xs={1}><span className='year'>2016</span></Col>
                            <Col xs={6}><p>Prêmio | Reforma do Edificio Prada</p></Col>
                            <Col xs={4}><p className='institution'>ENIAC</p></Col>
                        </Row>
                    </Container>
                    </Tab>
                    <Tab eventKey="contact" title="CONTATO" className='contactInfo'>
                    <Container>
                        <Row>
                            <Col xs={1}><i class="fa-solid fa-envelope"></i></Col>
                            <Col xs={4}><p>c.a.arquitetoeurbanista@hotmail.com</p></Col>
                        </Row>
                        <Row>
                            <Col xs={1}><i class="fa-solid fa-phone"></i></Col>
                            <Col xs={3}><p>(32) 99127-1237</p></Col>
                        </Row>
                        <Row>
                            <Col xs={1}><i class="fa-solid fa-house"></i></Col>
                            <Col xs={4}><p>Juiz de Fora, Minas Gerais - Brasil</p></Col>
                        </Row>
                    </Container>
                    </Tab>
                    </Tabs>
                </Col>
            </Row>
    </Container>



    //   <Container className='about' fluid>
    //     <Row className='aboutImg' id='about'>
    //         <Col><img src={aboutImg} /></Col>
    //         <Col xs={6}>
    //             <div class="sobre_titulo">
    //                 <h1>César Augusto</h1>
    //                 <div aria-label="seção apenas de ilustrações de botões">
    //                     <span></span>
    //                     <span></span>
    //                     <span></span>
    //                 </div>
    //             </div>
    //             <div class="sobre_conteudo">
    //             <div class="sobre_texto">
    //                 <p>Arquiteto e Urbanista com mais de 150 projetos
    //                     entregues, a mais de 7 anos fazendo gestão e
    //                     acompanhamento de obras. Vasta experiência
    //                     em projetos de grandes escalas como, escolas,
    //                     hospitais e igrejas.
    //                     <br/>
    //                 </p>
    //             </div>
    //             <div class="sobre_info">
    //             <div className='education'>
    //                     <h4>FORMAÇÃO ACADÊMICA</h4><br/>
    //                     <span className='year'>2019</span>
    //                     <p>Pós graduação em Arquitetura e Interiores</p>
    //                     <p className='institution'>Faculdade Unyleya</p><br/>
    //                     <span className='year'>2017</span>
    //                     <p>Graduação em Arquitetura e Urbanismo</p>
    //                     <p className='institution'>Centro universitário Adventista de São Paulo</p>
    //                 </div>
    //                 <div className='certifications'>
    //                     <h4>CURSOS E PREMIAÇÕES</h4><br/>
    //                     <span className='year'>2017</span>
    //                     <p>Pós graduação em Arquitetura e Interiores</p>
    //                     <p className='institution'>UNICAMP</p><br/>
    //                     <span className='year'>2016</span>
    //                     <p>Propriedades dos Materiais Metálicos</p>
    //                     <p className='institution'>Arcelor Mittal</p><br/>
    //                     <span className='year'>2016</span>
    //                     <p>Prêmio | Reforma do Edificio Prada</p>
    //                     <p className='institution'>ENIAC</p>
    //                 </div>
    //                 <div className='contactInfo'>
    //                     <h4>CONTATO</h4>
    //                     <span><i class="fa-solid fa-envelope"></i> c.a.arquitetoeurbanista@hotmail.com</span><br/>
    //                     <span><i class="fa-solid fa-phone"></i> (32) 99127-1237</span><br/>
    //                     <span><i class="fa-solid fa-house"></i> Juiz de Fora, Minas Gerais</span><br/>
    //                 </div>
    //             </div>
    //         </div>
    //         </Col>
    //     </Row>
    //   </Container>
    );
  }
  
  export {About};