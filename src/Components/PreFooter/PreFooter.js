
import { Container, Button } from 'react-bootstrap';
import './PreFooter.css'


const PreFooter = () => {
    return (
        <>
            <Container>
                <div className='PreFooter my-5'>
                    <h5>AO BUSCAR SEGURANÇA ELETRÔNICA, A <span>MS SEGURANÇA</span> OFERECE AS</h5>
                    <h5><span>SOLUÇÕES</span> IDEAIS PARA SUAS DEMANDAS.</h5>

                    <a href="https://wa.me/5571999284952" target="blank">

                        <Button className='my-4' size='lg' variant="warning">Solicite uma cotação</Button>
                    </a>
                </div>
            </Container>
        </>
    )
}

export default PreFooter;