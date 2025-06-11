
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png';
import whatsapp from '../../Assets/whatsapp.png';
import instagram from '../../Assets/instagram.png';
import { Link } from "react-router-dom";
import './Navigation.css';
import { Col, Row } from 'react-bootstrap';

const Navigation = () =>{
    return(
            <Navbar className='Nav' bg="none" expand="lg">
      <Container>
        <Navbar.Brand className="my-3 mx-5">
        <Link to='./'>
        <img src={logo} height={50} className='d-inline-block align-top logonav' alt='Ms Segurança' />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="mx-3 nav_link" to='./About' >Serviços</Link>
            <Link className="mx-3 nav_link" to='./ServicesPage' >Clientes</Link>
            <Link className="mx-3 nav_link" to='./Cases' >Sobre</Link>
            <Link className="mx-3 nav_link" to='./Cases' >Contato</Link>
           
          </Nav>

           <Nav>
          <Row className="d-none d-lg-flex"> 
            <Col>
            <Link to='https://aniloxdesign.com.br' target='_blank' rel="noopener noreferrer">
            <img src={whatsapp} height={27} alt='WhatsApp'/>
            </Link>
            
            </Col>

            <Col>
            <Link to='https://aniloxdesign.com.br' target='_blank' rel="noopener noreferrer">      
            <img src={instagram} height={27} alt='instagram'/>
            </Link>
            </Col>
          </Row>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        )
}

export default Navigation;