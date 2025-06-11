import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png';
import whatsapp from '../../Assets/whatsapp.png';
import instagram from '../../Assets/instagram.png';
import { Link } from "react-router-dom";
import './Navigation.css';
import { Col, Row } from 'react-bootstrap';

const Navigation = () => {
    // Estado para controlar se o fundo/altura deve mudar (navbar "scrolled")
    const [scrolled, setScrolled] = useState(false);
    // Estado para controlar se a navbar deve estar escondida
    const [hidden, setHidden] = useState(false); // Começa ESCONDIDA (true) por padrão
    // Ref para rastrear a última posição de rolagem
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Lógica para mudar background/altura (navbar "scrolled")
            // Acontece se rolar mais de 50px do topo
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Lógica para esconder/mostrar baseada na direção da rolagem
            const scrollDirectionThreshold = 10; // Pixels de rolagem para cima/baixo para disparar
            const showTriggerThreshold = 150;    // A partir de quantos pixels do topo a navbar pode aparecer/esconder

            // SE ROLANDO PARA CIMA
            // E já passou do ponto inicial para esconder/mostrar
            // E o scroll para cima for significativo
            if (currentScrollY < lastScrollY.current && currentScrollY > showTriggerThreshold) {
                if (lastScrollY.current - currentScrollY > scrollDirectionThreshold) {
                    setHidden(true); // ESCONDE a navbar (quando rola para CIMA)
                }
            }
            // SE ROLANDO PARA BAIXO
            else if (currentScrollY > lastScrollY.current) {
                // Se o scroll para baixo for significativo
                if (currentScrollY - lastScrollY.current > scrollDirectionThreshold) {
                    setHidden(false); // MOSTRA a navbar (quando rola para BAIXO)
                }
            }

            // SE MUITO PERTO DO TOPO DA PÁGINA (sempre mostra)
            // Isso garante que ao recarregar a página ou voltar ao topo, a navbar esteja visível
            if (currentScrollY < showTriggerThreshold) {
                setHidden(false);
            }

            // Atualiza a última posição de rolagem para o próximo evento
            lastScrollY.current = currentScrollY;
        };

        // Adiciona o event listener de rolagem
        window.addEventListener('scroll', handleScroll);

        // Função de limpeza
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Array de dependências vazio

    return(
        // Aplica as classes dinamicamente
        <Navbar className={`Nav ${scrolled ? 'scrolled-nav' : ''} ${hidden ? 'hidden-nav' : ''}`} bg="none" expand="lg">
            <Container className="navbar-custom-padding">
                <Navbar.Brand className="navbar-logo-container">
                    <Link to='./'>
                        <img src={logo} className='navbar-logo d-inline-block align-top' alt='Ms Segurança' />
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
                        <a className="mx-3 nav_link" href='mailto:contato@msseguranca.com.br'>Contato</a>
                    </Nav>
                    
                    <Nav>
                        <Row className="d-none d-lg-flex">
                            <Col>
                                <Link to='https://aniloxdesign.com.br' target='_blank' rel="noopener noreferrer">
                                    <img src={whatsapp} className='social-icon' alt='WhatsApp'/>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='https://aniloxdesign.com.br' target='_blank' rel="noopener noreferrer">
                                    <img src={instagram} className='social-icon' alt='instagram'/>
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