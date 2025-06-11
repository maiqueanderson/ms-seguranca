import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomeHero.css";

const HomeHero = () => {
    return (
        // A div externa com a classe do paralaxe
        <div className="home-hero-parallax home-hero">
            <Container className="home-hero-content"> {/* Aplica a classe para o conteúdo ficar acima do overlay */}
                <h1 hidden>MS Segurança Inteligência Virtual</h1>

                <Row className="my-5">
                    {/* Aplica classes de centralização na Col que contém os textos e o botão */}
                    <Col xs={12} className="text-center text-lg-start"> {/* Centraliza texto no mobile, alinha à esquerda no desktop */}

                        <Row>
                            <h1>Segurança Eletrônica</h1>
                        </Row>
                        <Row>
                            <h2>Tradição e inovação em proteção para Salvador e região</h2>
                        </Row>
                        <Row className="my-2">
                            {/* A Col interna do parágrafo para ter a mesma centralização */}
                            <Col className="text-center text-lg-start"> 
                                <p>
                                    Desde 2005, a expertise que garante tranquilidade
                                    para condomínios, empresas e residências.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {/* Para centralizar o botão, a Col é um flex container no mobile */}
                            <Col className="d-flex justify-content-center justify-content-lg-start">
                             <a href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer"> 
                                <Button variant="warning">Solicite uma cotação</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
       
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeHero;