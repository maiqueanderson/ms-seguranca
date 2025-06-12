import './Contact.css';
import Hero from '../../Components/Hero/Hero';
import { Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';


// Para enviar mensagens do Whatsapp com mensagem personalizada do cliente afim de captação do Lead
const Contact = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleEnviar = (e) => {
        e.preventDefault();

        const numeroWhatsApp = '5571999284952'; 
        const texto = `Olá! Meu nome é ${nome}, Email: ${email}, ${mensagem}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
    };

    const ContactCardContent = (
        <>
            <Container className='ContactForm'>

                <h3>ENVIE SUA MENSAGEM</h3>
                <p>Pronto para conversar? Ao clicar em Enviar, você será levado direto para 
                    o nosso WhatsApp com os dados que você digitou. Mal podemos esperar para falar com você!</p>

                <Form className='Form' onSubmit={handleEnviar}>

                    <Form.Group className="mb-3" controlId="formNome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMensagem">
                        <Form.Label>Digite sua Mensagem</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant='warning' type='submit'>Enviar Mensagem</Button>
                </Form>
            </Container>
        </>
    );

    return (
        <>
            <Hero
                titulo="Contato"
                cardContent={ContactCardContent}
            />
            <div className='py-5'>

           
            </div>
        </>
    )
}

export default Contact;