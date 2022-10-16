import './styles.css';
import { useEffect, useState } from "react";
import { Product } from "../../../models/product";
import api from '../../../service/api';

/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Products() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api
            .get(`/product/`)
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);

    return (
        <div className="card">
            <div >
                <div className="btn">
                    <button className="btn-new-product" onClick={handleShow}>Novo Produto</button>
                </div>

            </div>
            {/*             <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} className="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2 className="product-title">Buscar produto</h2>

            <div className="product-form-control-container">
                <input className="product-form-control" type="text" />
            </div>
            <table className="product-table">
                <thead>
                    <tr className="show-cell">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Provedor</th>
                        <th>Valor de Custo</th>
                        <th>Valor de Venda</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.provider}</td>
                            <td>{product.costPrice}</td>
                            <td>{product.salePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Products;