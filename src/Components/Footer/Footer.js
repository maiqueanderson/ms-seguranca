import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import logo from '../../Assets/logo2.png';
import email from '../../Assets/email.png';
import whatsapp from '../../Assets/whatsapp.png';
import instagram from '../../Assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>

        <Row className="py-5">
            
          <Col xs={12} lg={2} className="mb-4 mb-lg-0">
            <div className="mb-3 mb-lg-0">
                <img src={logo} height={100} alt="Ms Segurança" />
            </div>
          </Col>

          <Col xs={12} lg={3} className="mb-2 mb-lg-0">
          <Row>

            <Col xs={12} lg={3} className="mb-3 mb-lg-0">
                <img src={email} height={50} alt="E-mail"/>
            </Col>
            <Col xs={12} lg={9}>
                <Row>
                           
                    <h4>E-MAIL</h4>
                   
                </Row>
                <Row>
                     <a className="nav_link" href='mailto:contato@msseguranca24h.com.br'>    
                    <p>contato@msseguranca24h.com.br</p>
                     </a>
                </Row>
            </Col>

          </Row>
          </Col>

           <Col xs={12} lg={3} className="mb-2 mb-lg-0">
          <Row>

            <Col xs={12} lg={3} className="mb-3 mb-lg-0">
                <img src={whatsapp} height={60} alt="WhatsApp"/>
            </Col>
            <Col xs={12} lg={9}>
                <Row>
                    <h4>WHATSAPP</h4>
                </Row>
                <Row>
                     <a className="nav_link" href='https://wa.me/5571999284952'>    
                    <p>71 99928-4952</p>
                     </a>

                      <a className="nav_link" href='https://wa.me/5571985125272'>    
                    <p>71 98512-5272</p>
                     </a>

                </Row>
            </Col>
            
          </Row>
          </Col>

           <Col xs={12} lg={3} className="mb-2 mb-lg-0">
          <Row>

            <Col xs={12} lg={3} className="mb-3 mb-lg-0">
                <img src={instagram} height={60} alt="E-mail"/>
            </Col>
            <Col xs={12} lg={9}>
                <Row>
                   <h4>INSTAGRAM</h4>
                </Row>
                <Row>
                      <a className="nav_link" href='https://www.instagram.com/ms.seguranca2008/'>    
                    <p>@ms.seguranca2008</p>
                     </a>

                    
                </Row>
            </Col>
            
          </Row>
          </Col>

          

        </Row>
        <Row>
            <div className="d-flex justify-content-center text-light footer_copy">

            
             <a className="nav_link" href='https://www.aniloxdesign.com.br'>    
                    <h6>© 2025 Anilox Design. Todos os direitos reservados.</h6>
                     </a>
            </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;