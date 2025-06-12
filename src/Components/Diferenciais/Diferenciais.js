import { Col, Container, Row, Card, Button } from "react-bootstrap";
import './Diferenciais.css'


const Diferenciais = ({
    titulo,
    FrontTitulo1,
    FrontTitulo2,
    FrontTitulo3,
    FrontTitulo4,
    BackTitulo1,
    BackTitulo2,
    BackTitulo3,
    BackTitulo4,
    FrontParag1,
    FrontParag2,
    FrontParag3,
    FrontParag4,
    BackParag1,
    BackParag2,
    BackParag3,
    BackParag4,
    icon1,
    icon2,
    icon3,
    icon4
     }) => {
    return (
        <>
            <Container>
                <div className="diferenciais pt-5">
                    <h4 className="my-5">{titulo}</h4>
                    <Row>

                        {/* Card de Experiência */}
                        <Col xs={12} lg={3} className="mb-4 mb-lg-0">
                            {/* Contêiner principal do flip */}
                            <div className="flip-card">
                                {/* Contêiner interno que vira */}
                                <div className="flip-card-inner">
                                    {/* Frente do Card */}
                                    <div className="flip-card-front p-5 CardsD"> {/* classe de modificação */}
                                        <Card.Body className=''>
                                            <h6>{icon1}</h6>
                                            <h3>{FrontTitulo1}</h3>
                                            <p className="Pfront">
                                                {FrontParag1}
                                            </p>
                                        </Card.Body>
                                    </div>
                                    {/* Verso do Card */}
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon1}</h6>
                                            <h2>{BackTitulo1}</h2>
                                            <p className="pBack">
                                                {BackParag1}
                                            </p>
                                            <a href="https://wa.me/5571999284952" target="blank">

                                                <Button variant="warning">Solicite uma cotação</Button>
                                            </a>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Card de Inovação */}
                        <Col xs={12} lg={3} className="mb-4 mb-lg-0">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon2}</h6>
                                            <h3>{FrontTitulo2}</h3>
                                            <p className="Pfront">
                                                {FrontParag2}
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon2}</h6>
                                            <h2>{BackTitulo2}</h2>
                                            <p className="pBack">
                                                {BackParag2}
                                            </p>
                                            <a href="https://wa.me/5571999284952" target="blank">

                                                <Button variant="warning">Solicite uma cotação</Button>
                                            </a>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Card Sob Medida */}
                        <Col xs={12} lg={3} className="mb-4 mb-lg-0">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon3}</h6>
                                            <h3>{FrontTitulo3}</h3>
                                            <p className="Pfront">
                                               {FrontParag3}
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon3}</h6>
                                            <h2>{BackTitulo3}</h2>
                                            <p className="pBack">
                                                {BackParag3}
                                            </p>
                                            <a href="https://wa.me/5571999284952" target="blank">

                                                <Button variant="warning">Solicite uma cotação</Button>
                                            </a>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Card de Suporte */}
                        <Col xs={12} lg={3} className="mb-4 mb-lg-0">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon4}</h6>
                                            <h3>{FrontTitulo4}</h3>
                                            <p className="Pfront">
                                                {FrontParag4}
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6>{icon4}</h6>
                                            <h2>{BackTitulo4}</h2>
                                            <p className="pBack">
                                                {BackParag4}
                                            </p>
                                            <a href="https://wa.me/5571999284952" target="blank">

                                                <Button variant="warning">Solicite uma cotação</Button>
                                            </a>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Diferenciais;