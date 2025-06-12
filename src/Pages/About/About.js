import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import Hero from '../../Components/Hero/Hero';
import heroimg from '../../Assets/sobre/sobre-ms-segurança.jpg';
import missao from '../../Assets/sobre/missão-ms-segurança.png';
import PreFooter from '../../Components/PreFooter/PreFooter';


const About = ()=>{

    const SobreCard = (
        <>
            <Container>

                <Row className='AboutCardHero px-lg-5'>
                    <Col xs={12} lg={6}>
                        <h2 className='mb-4'>Especialista em
                            Segurança eletrônica</h2>
                        <p className='mb-5 mb-lg-0'>
                            Nós somos referência em segurança eletrônica e soluções de infraestrutura, 
                            construindo uma trajetória de confiança e inovação desde 2005. Com quase duas décadas 
                            de atuação, nossa história é marcada pela paixão em proteger o que é mais valioso para 
                            você: seu lar, seu negócio e sua tranquilidade.
                        </p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <img src={heroimg} alt='Trabalhadores MS Segurança' />
                    </Col>
                </Row>
            </Container>
        </>
    )

    return(
        <>
            <Hero
                titulo="Sobre Nós"
                cardContent={SobreCard}
            
            />

            <Container>
                <div className='mt-5 MSsobre'>

                    <h3 className='my-4'>MS SEGURANÇA</h3>
                    <h4 className='my-4'>Inovação e Qualidade em Cada Detalhe</h4>
                    <p className='mt-4'>
                        Nascemos com o propósito de ir além, buscando constantemente as mais recentes tecnologias e
                        desenvolvendo soluções personalizadas. Nossa equipe é formada por especialistas que compreendem
                        a dinâmica da segurança moderna e estão preparados para oferecer um serviço de excelência, do planejamento à manutenção.
                    </p>

                </div>

              
            </Container>

              <div className='Missao'>
                <Container className='pt-5'>

                    <Row>
                        <Col xs={12} lg={6} className='mb-5 mb-lg-0'>
                            <h4 className='pt-5'>Nossa Missão</h4>
                            <p className='py-3'>
                                A MS SEGURANÇA é uma empresa moderna e inovadora que, desde seus primórdios, 
                                está ligada ao desenvolvimento de novas tecnologias através de seus produtos e serviços.
                            </p>
                            <p>
                                Fazem parte da filosofia da empresa a busca incessante de novas ferramentas e soluções, 
                                tanto em CFTV sistema digital, como em antenas coletivas, central de interfone, automação de 
                                portão e entre outros serviços, onde temos o processo de melhor qualidade para atender as necessidades 
                                de um mercado em constante evolução.
                            </p>
                            <p>
                                Desde 2005 a MS SEGURANÇA esteve presente no mercado de tecnologia de imagem digital entre outros serviços,
                                 adquirindo experiência para oferecer soluções e uma excelente qualidade de serviços e manutenção.
                            </p>
                        </Col>

                        <Col xs={12} lg={6} className='d-flex align-items-end justify-content-center'>
              <img src={missao} alt='Técnico realizando manutenção preventiva' />
            </Col>
                    </Row>
                </Container>
                </div>

                <PreFooter/>

        </>
    )
}

export default About;