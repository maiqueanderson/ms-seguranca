import React from 'react'; // Importe React
import { Col, Row, Card, Container } from 'react-bootstrap';
import Hero from '../../Components/HomeHero/HomeHero';
import Diferenciais from '../../Components/Diferenciais/Diferenciais';
import PreFooter from '../../Components/PreFooter/PreFooter';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faBuildingShield,
  faHouseLock,
  faLightbulb,
  faTowerBroadcast,
  faPhone,
  faBolt,
  faPlugCircleBolt,
  faWarehouse,
  faDroplet,
  faFingerprint,
  faHouseFire,
  faCamera,
  faUsersGear,
  faPenToSquare,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";

import quemsomos from '../../Assets/home/quemsomos.jpg';
import paraquem from '../../Assets/home/paraquem.jpg';
import worker from '../../Assets/home/empregado-ms-seguranca.png'

import './Home.css'

// Importe do hook useInView da biblioteca react-intersection
import { useInView } from 'react-intersection-observer';

function Home() {
  // useInView é um hook para observar a imagem
  // ref: é a referência que será anexada ao elemento HTML
  // inView: é um booleano que será true quando o elemento estiver visível
  // Ajuste o 'threshold' (0.2 significa 20% do elemento visível para disparar)
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.2,    // 20% do elemento visível na viewport
  });

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
              <Row><h5 className="text-center text-lg-start mb-5 mb-lg-0">Quem Somos?</h5></Row>
              <Row><p className='mb-5 mb-lg-0'>
                Na MS Segurança, unimos a tradição de quem está no mercado desde 2005 com a constante inovação na área de segurança eletrônica em Salvador e Região. Nossa missão é ir além, buscando incessantemente as mais novas tecnologias e soluções, seja em sistemas de câmeras digitais de última geração, automação de portões, centrais de interfone, ou manutenção de equipamentos essenciais. Com essa vasta experiência e compromisso com a qualidade, garantimos a proteção e a tranquilidade que você e seu patrimônio merecem.
              </p></Row>
            </Col>

            <Col xs={12} lg={6}>
              {/* Adiciona a ref ao elemento img e a classe condicional */}
              <img
                ref={imgRef} // Anexa a ref do Intersection Observer
                className={imgInView ? 'animate-in' : ''} // Adiciona a classe 'animate-in' quando visível
                src={quemsomos}
                alt='Quem Somos MS Segurança'
              />


            </Col>
          </Row>
        </div>

        <div className='ParaQuem mt-5'>
          <Row>
            <Col xs={12} lg={8} className='d-none d-lg-flex'>
              <img

                src={paraquem}
                alt='MS Segurança funcionário'
              />
            </Col>

            <Col xs={12} lg={4} className=' text-center text-lg-start'>
              <Row>
                <h4>Soluções completas<br />para o seu patrimônio</h4>
              </Row>
              <Row className='my-4'>
                <h6 className='py-4 py-lg-0 text-center text-lg-start'><span><FontAwesomeIcon icon={faIndustry} /></span> INDÚSTRIA E COMÉRCIO</h6>
                <p>
                  a MS Segurança oferece soluções que protegem seu patrimônio, otimizam o fluxo de trabalho e minimizam riscos. Câmeras avançadas, controle de acesso e automação de portões garantem segurança e eficiência nas suas operações.
                </p>

                <h6 className='py-4 py-lg-0 text-center text-lg-start'><span><FontAwesomeIcon icon={faBuildingShield} /></span> CONDOMÍNIOS</h6>
                <p>
                  a MS Segurança eleva a segurança e organização. Com interfonia, controle de acesso inteligente, CFTV digital e automação de portões, criamos um ambiente mais seguro e tranquilo para todos os moradores e a gestão.
                </p>

                <h6 className='py-4 py-lg-0'><span><FontAwesomeIcon icon={faHouseLock} /></span> RESIDÊNCIAS</h6>
                <p>
                  a MS Segurança oferece a paz de espírito que sua família merece. Nossos sistemas personalizados, com câmeras discretas, cercas elétricas, automação de portões e alarmes inteligentes, protegem seu lar 24 horas por dia.
                </p>
              </Row>

            </Col>
          </Row>
        </div>



      </Container>

      <div className='Services'>
        <Container className='h-100 d-flex flex-column'> {/* h-100, d-flex e flex-column aqui */}
          <Row className='pt-5 h-100'> {/*  h-100 para a Row ocupar a altura total */}
            <Col xs={12} lg={6}>
              <h6>Evite imprevistos, conheça nosso serviço de</h6>
              <h6 className='pt-2 pb-4'><span>manutenção preventiva</span></h6>
              <p className='py-4'>
                Na MS Segurança, a tranquilidade do seu lar ou negócio é prioridade. Nossos planos de manutenção preventiva garantem que seus equipamentos estejam sempre funcionando, protegendo seu patrimônio 24 horas por dia.
              </p>
              <h5>MANUTENÇÃO EM:</h5>

              <Row> {/* A Row principal que contém todas as linhas de serviço */}

                {/* Primeira linha de serviço: Câmeras de Segurança e Bomba de Água */}
                <Row className="align-items-center py-4">
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'> {/* Coluna para o item da esquerda */}
                    {/* classes justify-content-center e justify-content-md-start para centralizar no mobile*/}
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faCamera} className="me-2 fontIcon" />
                      <h3> CÂMERAS DE SEGURANÇA</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={6}> {/* Coluna para o item da direita */}
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faDroplet} className="me-2 fontIcon" />
                      <h3> BOMBA DE ÁGUA</h3>
                    </div>
                  </Col>
                </Row>

                {/* Segunda linha de serviço: Cerca Elétrica e Geradores */}
                <Row className="align-items-center py-4">
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faBolt} className="me-2 fontIcon" />
                      <h3> CERCA ELÉTRICA</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faPlugCircleBolt} className="me-2 fontIcon" />
                      <h3> GERADORES</h3>
                    </div>
                  </Col>
                </Row>

                {/* Terceira linha de serviço: Motores de Portões e Interfone */}
                <Row className="align-items-center py-4">
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faWarehouse} className="me-2 fontIcon" />
                      <h3> MOTORES DE PORTÕES</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faPhone} className="me-2 fontIcon" />
                      <h3> INTERFONE</h3>
                    </div>
                  </Col>
                </Row>

                {/* Quarta linha de serviço: Controle de Acesso e Antena Coletiva */}
                <Row className="align-items-center py-4">
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faFingerprint} className="me-2 fontIcon" />
                      <h3> CONTROLE DE ACESSO</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faTowerBroadcast} className="me-2 fontIcon" />
                      <h3> ANTENA COLETIVA</h3>
                    </div>
                  </Col>
                </Row>

                {/* Quinta linha de serviço: Alarme de Incêndio e Luzes de Emergência */}
                <Row className="align-items-center py-4">
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faHouseFire} className="me-2 fontIcon" />
                      <h3> ALARME DE INCÊNDIO</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className='mb-5 mb-lg-0'>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <FontAwesomeIcon icon={faLightbulb} className="me-2 fontIcon" />
                      <h3> LUZES DE EMERGÊNCIA</h3>
                    </div>
                  </Col>
                </Row>

              </Row>
            </Col>

            {/* Esta Col é um container flex para a imagem */}
            <Col xs={12} lg={6} className='d-flex align-items-end justify-content-center'>
              <img src={worker} alt='Técnico realizando manutenção preventiva' />
            </Col>
          </Row>
        </Container>
      </div>

      <Diferenciais
        titulo='Alguns Diferenciais'

        FrontTitulo1='EXPERIÊNCIA'
        icon1={<FontAwesomeIcon icon={faUsersGear} />}
        BackTitulo1='Nossa História'
        FrontParag1='Desde 2005, construímos uma sólida
                     história no mercado de
                     segurança eletrônica'
        BackParag1='Mais de 18 anos de dedicação e segurança.
                    Conte com a nossa expertise!'  
        
        FrontTitulo2='INOVAÇÃO'
        icon2={<FontAwesomeIcon icon={faLightbulb} />}
        BackTitulo2='Tecnologia'
        FrontParag2='Estamos sempre atualizados com as
                                                últimas tecnologias para oferecer
                                                as soluções mais modernas.'
        BackParag2='Sempre buscando as melhores soluções
                                                para a sua segurança!'             

        FrontTitulo3='SOB MEDIDA'
        icon3={<FontAwesomeIcon icon={faPenToSquare} />}
        BackTitulo3='Projetos Únicos'
        FrontParag3='Criamos projetos de segurança sob
                                                medida para atender as necessidades
                                                específicas de cada cliente.'
        BackParag3='Sua segurança personalizada para o seu perfil e necessidades.'  
        
        FrontTitulo4='SUPORTE'
        icon4={<FontAwesomeIcon icon={faHeadset} />}
        BackTitulo4='Atendimento 24h'
        FrontParag4='Garantimos o funcionamento contínuo
                                                dos seus equipamentos com visitas
                                                regulares e equipe especializada.'
        BackParag4='Equipe pronta para te auxiliar sempre que precisar.' 

      />
      <PreFooter />

    </>
  );
}

export default Home;