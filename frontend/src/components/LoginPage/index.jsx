import React, { useState, useContext } from 'react';
import { AuthContext } from "../../contexts/auth";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


function LoginPage() {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        login(email, password); //integração com o contexto/api
    };

    return (
        <div className="autentication-container">
            <div className="autentication-box">
                <h2 className="autentication-title">Login do Sistema</h2>
                <h4 className="autentication-title-h4">Acesso Restrito</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form>
                <div>
                    <Button variant="success" onClick={handleSubmit}>Entrar</Button>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;