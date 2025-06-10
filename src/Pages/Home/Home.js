import { Col, Row, Card, Container } from 'react-bootstrap';
import Hero from '../../Components/HomeHero/HomeHero';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faBuildingShield, faHouseLock } from "@fortawesome/free-solid-svg-icons";

import quemsomos from '../../Assets/home/quemsomos.jpg';

import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Row className='Cards'>
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Card className='cardHover'>
              <Card.Body className='CardInfo py-5'>
                <h4><FontAwesomeIcon icon={faIndustry} /></h4>
                <h3>SOLUÇÕES ELETRÔNICAS</h3>
                <h3> PARA <span>INDÚSTRIAS</span></h3>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Card className='cardHover'>
              <Card.Body className='CardInfo py-5'>
                <h4><FontAwesomeIcon icon={faBuildingShield} /></h4>
                <h3>SOLUÇÕES ELETRÔNICAS</h3>
                <h3> PARA <span>CONDOMÍNIOS</span></h3>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Card className='cardHover'>
              <Card.Body className='CardInfo py-5'>
                <h4><FontAwesomeIcon icon={faHouseLock} /></h4>
                <h3>SOLUÇÕES ELETRÔNICAS</h3>
                <h3> PARA <span>RESIDÊNCIAS</span></h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

           <div className='QuemSomos py-5'>

          <Row>

            <Col xs={12} lg={6}>
              <Row><h5>Quem Somos?</h5></Row>
              <Row><p>
                Na MS Segurança, unimos a tradição de quem está no mercado desde 2005 com a constante inovação na área de segurança eletrônica em Salvador e Região. Nossa missão é ir além, buscando incessantemente as mais novas tecnologias e soluções, seja em sistemas de câmeras digitais de última geração, automação de portões, centrais de interfone, ou manutenção de equipamentos essenciais. Com essa vasta experiência e compromisso com a qualidade, garantimos a proteção e a tranquilidade que você e seu patrimônio merecem.

              </p></Row>
            </Col>

            <Col xs={12} lg={6}>
              <img src={quemsomos} alt='Quem Somos MS Segurança'/>
            </Col>

          </Row>

      </div>
      
      </Container>

   
    </>
  );
}

export default Home;