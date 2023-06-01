import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.jpg";
import "animate.css";
import "../App.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await axios.post(
        "https://cesararquitetura.com.br/send",
        formData
      );

      if (response.status === 200) {
        setStatus({
          success: true,
          message: "Mensagem enviada com sucesso.",
        });
      } else {
        setStatus({
          success: false,
          message: "Algo deu errado, tente novamente mais tarde.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Algo deu errado, tente novamente mais tarde.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={12} className="px-1">
                  <input
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Mensagem"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button type="submit" id="send">
                    <span>Enviar</span>
                  </button>
                </Col>
                <Row>
                  {status && (
                    <Col>
                      <p className={status.success ? "success" : "error"}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

