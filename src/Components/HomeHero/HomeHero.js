import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomeHero.css";

const HomeHero = () => {
    return (
        // A div externa com a classe do paralaxe
        <div className="home-hero-parallax home-hero">
            <Container className="home-hero-content"> {/* Aplica a classe para o conteúdo ficar acima do overlay */}
                <h1 hidden>MS Segurança Inteligência Virtual</h1>

                <Row className="my-5">
                    <Col>

                        <Row>
                            <h1>Segurança Eletrônica</h1>
                        </Row>
                        <Row>
                            <h2>Tradição e inovação em proteção para Salvador e região</h2>
                        </Row>
                        <Row className="my-2">
                            <Col > 
                                <p>
                                    Desde 2005, a expertise que garante tranquilidade
                                    para condomínios, empresas e residências.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {/* Botão de chamada para ação */}
                            <Col>
                                <Button variant="warning">Solicite uma cotação</Button>
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