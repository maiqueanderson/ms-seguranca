import { Button, Card, Container, Row } from "react-bootstrap";
import "./Hero.css";

// Adicione 'titulo' e 'cardContent' como props que o componente Hero espera receber
const Hero = ({ titulo, cardContent }) => {
    return (
        <>
        
        <div className="hero-parallax home-hero">
            <Container className="hero-content"> 
                <Row className="my-5 text-center">
                    <Row>
                        {/* Use a prop 'titulo' aqui */}
                        <h1>{titulo}</h1>
                    </Row>

                    <Row className="d-flex justify-content-center my-3">
                        <a href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>
                    </Row>

                </Row>

            </Container>
        </div>
        <Container>

        <div>
                <Card className='CardHero'>
              <Card.Body className='py-5'>
                {/* Use a prop 'cardContent' aqui. Ela pode ser qualquer conteúdo JSX! */}
                {cardContent}
              </Card.Body>
            </Card>
        </div>
        </Container>
        </>
        
    );
};

export default Hero;