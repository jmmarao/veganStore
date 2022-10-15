import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function NewCustomer() {
    return (
        <div className="new-container">
            <div className="new-box">
                <h2 className="new-title">Cadastro de Clientes</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome do cliente" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o email do cliente" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o cpf do cliente" />
                    </Form.Group>

                </Form>
                <div className="buttons">
                    <Button variant="success">Salvar</Button>
                </div>
                <div className="buttons">
                    <Button variant="secondary">Cancelar</Button>
                </div>

            </div>
        </div>
    )
}

export default NewCustomer;