import { Col, Container, Row, Card, Button } from "react-bootstrap";
import './Diferenciais.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLightbulb,
    faUsersGear,
    faPenToSquare,
    faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Diferenciais = () => {
    return (
        <>
            <Container>
                <div className="diferenciais pt-5">
                    <h4 className="my-5">Alguns Diferenciais</h4>
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
                                            <h6><FontAwesomeIcon icon={faUsersGear} /></h6>
                                            <h3>EXPERIÊNCIA</h3>
                                            <p className="Pfront">
                                                Desde 2005, construímos uma sólida
                                                história no mercado de
                                                segurança eletrônica
                                            </p>
                                        </Card.Body>
                                    </div>
                                    {/* Verso do Card */}
                                    <div className="flip-card-back p-5 CardsD"> 
                                        <Card.Body className=''>
                                            <h6><FontAwesomeIcon icon={faUsersGear} /></h6> 
                                            <h2>Nossa História</h2>
                                            <p className="pBack">
                                                Mais de 18 anos de dedicação e segurança.
                                                Conte com a nossa expertise!
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
                                            <h6><FontAwesomeIcon icon={faLightbulb} /></h6>
                                            <h3>INOVAÇÃO</h3>
                                            <p className="Pfront">
                                                Estamos sempre atualizados com as
                                                últimas tecnologias para oferecer
                                                as soluções mais modernas.
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6><FontAwesomeIcon icon={faLightbulb} /></h6>
                                            <h2>Tecnologia</h2>
                                            <p className="pBack">
                                                Sempre buscando as melhores soluções
                                                para a sua segurança!
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
                                            <h6><FontAwesomeIcon icon={faPenToSquare} /></h6>
                                            <h3>SOB MEDIDA</h3>
                                            <p className="Pfront">
                                                Criamos projetos de segurança sob
                                                medida para atender as necessidades
                                                específicas de cada cliente.
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6><FontAwesomeIcon icon={faPenToSquare} /></h6>
                                            <h2>Projetos Únicos</h2>
                                             <p className="pBack">
                                                Sua segurança personalizada para o seu perfil e necessidades.
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
                                            <h6><FontAwesomeIcon icon={faHeadset} /></h6>
                                            <h3>SUPORTE</h3>
                                           <p className="Pfront">
                                                Garantimos o funcionamento contínuo
                                                dos seus equipamentos com visitas
                                                regulares e equipe especializada.
                                            </p>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back p-5 CardsD">
                                        <Card.Body className=''>
                                            <h6><FontAwesomeIcon icon={faHeadset} /></h6>
                                            <h2>Atendimento 24h</h2>
                                             <p className="pBack">
                                                Equipe pronta para te auxiliar sempre que precisar.
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