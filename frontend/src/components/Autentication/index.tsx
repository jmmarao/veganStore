import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function Autentication() {
    return (
        <div className="autentication-container">
            <div className="autentication-box">
                <h2 className="autentication-title">Acesso Restrito</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome de usuário" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                </Form>
                <div>
                    <Button variant="success">Entrar</Button>
                </div>

            </div>
        </div>
    )
}

export default Autentication;