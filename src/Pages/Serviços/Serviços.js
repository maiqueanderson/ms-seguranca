import './Serviços.css';
import Hero from '../../Components/Hero/Hero';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faBuildingShield, faHouseLock, faStore } from "@fortawesome/free-solid-svg-icons";
import PreFooter from '../../Components/PreFooter/PreFooter';

import heroimg from '../../Assets/servicos/Trabalhadores-ms-segurança.png';
import cameraimg from '../../Assets/servicos/camera-ms-segurança.jpg';
import Diferenciais from '../../Components/Diferenciais/Diferenciais';
import cercaeletrica from '../../Assets/servicos/cerca-eletrica-ms-segurança.jpg';
import portaoseg from '../../Assets/servicos/portão-eletrônico-ms-segurança.jpg';
import controleacesso from '../../Assets/servicos/controle-de-acesso-ms-segurança.jpg';
import manutencao from '../../Assets/servicos/manutenção-de-sistemas-eletrônicos-ms-segurança.jpg'

const Serviços = () => {

    const ServiceCardContent = (
        <>
            <Container>

                <Row className='ServiceCardHero px-lg-5'>
                    <Col xs={12} lg={6}>
                        <h2 className='mb-4'>Soluções Completas</h2>
                        <p className='mb-5 mb-lg-0'>
                            Na MS Segurança, entendemos que cada ambiente em Salvador e Região tem necessidades de proteção únicas.
                            Por isso, oferecemos uma gama completa de soluções em segurança eletrônica e infraestrutura, projetadas
                            para garantir a tranquilidade e a funcionalidade do seu lar, condomínio ou empresa.
                        </p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <img src={heroimg} alt='Trabalhadores MS Segurança' />
                    </Col>
                </Row>
            </Container>
        </>
    );
    return (
        <>
            <Hero
                titulo="Nossos Serviços" //Definindo o titulo do componente Hero
                cardContent={ServiceCardContent} //Está pegando o conteúdo definodo em ServiceCardContent para os Cards

            />

            <Container>

                <div className='mt-5 MSsolucoes'>

                    <h3 className='my-4'>MS SEGURANÇA</h3>
                    <h4 className='my-4'>Soluções para todos os tipos de clientes</h4>
                    <p className='mt-4'>
                        Na MS Segurança, sabemos que cada cliente tem um desafio único. Por isso, oferecemos
                        soluções diversas e personalizadas para atender as necessidades específicas de:
                    </p>

                </div>

                <Diferenciais

                    FrontTitulo1='INDÚSTRIAS'
                    icon1={<FontAwesomeIcon icon={faIndustry} />}
                    BackTitulo1='INDÚSTRIAS'
                    FrontParag1='Oferecemos soluções robustas que protegem seu patrimônio, otimizam a gestão de acesso e garantem a continuidade da sua produção.'
                    BackParag1='Proteja seu patrimônio, agilize acessos e assegure a continuidade da sua operação com nossas soluções.'

                    FrontTitulo2='CONDOMÍNIOS'
                    icon2={<FontAwesomeIcon icon={faBuildingShield} />}
                    BackTitulo2='CONDOMÍNIOS'
                    FrontParag2='Elevamos a segurança coletiva e a organização, criando um ambiente mais tranquilo para moradores e síndicos.'
                    BackParag2='Mais segurança, organização e tranquilidade para moradores e síndicos.'

                    FrontTitulo3='RESIDÊNCIAS'
                    icon3={<FontAwesomeIcon icon={faHouseLock} />}
                    BackTitulo3='RESIDÊNCIAS'
                    FrontParag3='Proporcionamos a paz de espírito que você e sua família merecem, protegendo seu lar 24 horas por dia.'
                    BackParag3='Seu lar seguro 24h, sua família com a paz de espírito que merece.'

                    FrontTitulo4='COMÉRCIOS'
                    icon4={<FontAwesomeIcon icon={faStore} />}
                    BackTitulo4='COMÉRCIOS'
                    FrontParag4='Garantimos a proteção do seu negócio e de seus clientes, com sistemas que inibem ações e oferecem controle total.'
                    BackParag4='Proteja seu negócio e clientes com sistemas que inibem e oferecem controle total.'

                />

            </Container>

            <div className='ServicesOp1'>
                <Container className='py-lg-5'>
                    <Row className='py-5'>
                        <Col xs={12} lg={6}>
                            <img src={cameraimg} alt='Câmera MS Segurança' />
                        </Col>

                        <Col xs={12} lg={6}>
                            <h5 className='my-4 pb-lg-4 my-lg-0'>Câmeras de Segurança</h5>
                            <p>
                                Monitore seu ambiente 24 horas por dia com a tecnologia mais avançada.
                                Nossos sistemas de Câmeras de Segurança (CFTV Digital) permitem a visualização
                                em tempo real e a gravação de imagens em alta definição, tudo acessível de qualquer lugar.
                                
                                </p>
                            <p className='mb-5'>- Visão 24/7: Monitore seu espaço a qualquer hora, de onde estiver.<br/>
                                - Dissuasão: Inibe ações criminosas pela presença visível.<br/>
                                - Evidências Claras: Gravação de imagens em alta qualidade para qualquer eventualidade.<br/>
                                - Tecnologia Avançada: Recursos como detecção de movimento e acesso remoto.</p>
                        
                           <a className='d-none d-lg-flex btnService' href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>   
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='ServicesOp2'>
                <Container className='mb-5'>
                    <Row >
                       

                        <Col xs={12} lg={6}>
                            <h5 className='mb-4'>Cerca Elétrica</h5>
                            <p>

                                Aumente a proteção perimetral do seu imóvel com uma barreira de segurança eficiente e inibidora.
                                Nossas cercas elétricas são instaladas com alta qualidade, oferecendo um sistema de alarme integrado
                                para avisos imediatos em caso de tentativa de invasão.

                            </p>
                            <p className='mb-5'>
                                - Barreira Física: Dificulta e inibe tentativas de acesso não autorizado.<br/>
                                - Alerta Imediato: Dispara alarmes ao ser violada.<br/>
                                - Proteção Perimetral: Garante a segurança em todo o contorno do imóvel.<br/>
                                - Confiabilidade: Equipamentos e instalação de alta qualidade.</p>

                           <a className='d-none d-lg-flex btnService' href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>   
                        </Col>

                         <Col xs={12} lg={6}>
                            <img src={cercaeletrica} alt='Câmera MS Segurança' />
                        </Col>
                    </Row>
                </Container>
            </div>

             <div className='ServicesOp1'>
                <Container className='py-lg-5'>
                    <Row className='py-5'>
                        <Col xs={12} lg={6}>
                            <img src={portaoseg} alt='Câmera MS Segurança' />
                        </Col>

                        <Col xs={12} lg={6}>
                            <h5 className='my-4 pb-lg-4 my-lg-0'>Portões Eletrônicos</h5>
                            <p>
                                Tenha mais conforto, agilidade e segurança no acesso ao seu imóvel. 
                                A MS Segurança oferece soluções completas em automação de portões para diversos modelos, 
                                com motores robustos e tecnologia que garante um funcionamento suave e controlado.
                                
                                </p>
                            <p className='mb-5'>
                                - Praticidade no Acesso: Abra e feche portões sem sair do carro.<br/>
                                - Mais Segurança: Evita a exposição desnecessária na entrada e saída.<br/>
                                - Diversidade de Modelos: Soluções para portões deslizantes, basculantes e pivotantes.<br/>
                                - Funcionamento Suave: Motores de alta performance e durabilidade.</p>
                        
                           <a className='d-none d-lg-flex btnService' href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>   
                        </Col>
                    </Row>
                </Container>
            </div>

             <div className='ServicesOp2'>
                <Container className='mb-5'>
                    <Row >
                       

                        <Col xs={12} lg={6}>
                            <h5 className='mb-4'>Controle de Acesso</h5>
                            <p>

                                Gerencie e restrinja o acesso ao seu ambiente de forma inteligente e segura. 
                                Nossos sistemas de Controle de Acesso permitem identificar e autorizar quem entra e sai, 
                                proporcionando maior organização e proteção para condomínios, empresas e residências.

                            </p>
                            <p className='mb-5'>
                                - Gerenciamento Inteligente: Controle total sobre quem acessa o local.<br/>
                                - Diversidade de Métodos: Biometria, cartões, senhas, reconhecimento facial.<br/>
                                - Mais Segurança: Restrição de acesso a áreas específicas.<br/>
                                - Relatórios Detalhados: Registro de entradas e saídas para auditoria.</p>

                           <a className='d-none d-lg-flex btnService' href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>   
                        </Col>

                         <Col xs={12} lg={6}>
                            <img src={controleacesso} alt='Câmera MS Segurança' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='ServicesOp1'>
                <Container className='py-lg-5'>
                    <Row className='py-5'>
                        <Col xs={12} lg={6}>
                            <img src={manutencao} alt='Câmera MS Segurança' />
                        </Col>

                        <Col xs={12} lg={6}>
                            <h5 className='my-4 pb-lg-4 my-lg-0'>Manutenção de Sistemas
                                                                Eletrônicos</h5>
                            <p>
                                Garanta o bom funcionamento e a longevidade dos seus equipamentos de segurança. 
                                Nosso serviço de manutenção preventiva e corretiva assegura que todos os seus sistemas 
                                estejam sempre ativos e performando com máxima eficiência.
                                
                                </p>
                            <p className='mb-5'>
                                - Prevenção de Falhas: Evita problemas inesperados e gastos maiores.<br/>
                                - Vida Útil Prolongada: Aumenta a durabilidade dos equipamentos.<br/>
                                - Funcionamento Contínuo: Seus sistemas sempre prontos para proteger.<br/>
                                - Suporte Especializado: Equipe técnica experiente para qualquer necessidade.</p>
                        
                           <a className='d-none d-lg-flex btnService' href="https://wa.me/5571999284952" target="_blank" rel="noopener noreferrer">
                            <Button variant="warning">Solicite uma cotação</Button>
                        </a>   
                        </Col>
                    </Row>
                </Container>
            </div>

            <PreFooter/>
        </>
    )
}

export default Serviços;