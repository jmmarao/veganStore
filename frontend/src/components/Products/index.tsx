import './styles.css';
import { useEffect, useState, useRef } from "react";
import { Product } from "../../models/product";
import api from '../../service/api';

/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Products() {
    const [show, setShow] = useState(false);

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const providerRef = useRef(null);
    const costPriceRef = useRef(null);
    const salePriceRef = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        const productToSave = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            costPrice: costPriceRef.current.value,
            salePrice: salePriceRef.current.value,
            provider: providerRef.current.value
        };

        api
            .post(`/product/save`, productToSave)
            .then(response => console.log("Posting data: ", response))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });

        setShow(false)

        window.location.reload();
    };

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

            <Modal show={show} onHide={handleClose} className="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title>Novo Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className='formControl'
                                type="text"
                                placeholder="Produto"
                                ref={nameRef} />

                            <Form.Control className='formControl'
                                type="text"
                                placeholder="Descrição do produto"
                                ref={descriptionRef} />

                            <Form.Control className='formControl'
                                type="text"
                                placeholder="Provedor"
                                ref={providerRef} />

                            <Form.Control className='formControl'
                                type="number"
                                placeholder="Valor de custo (R$)"
                                ref={costPriceRef} />

                            <Form.Control className='formControl'
                                type="number"
                                placeholder="Valor de venda (R$)"
                                ref={salePriceRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Incluir Produto
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2 className="product-title">Buscar produto</h2>

            {/*             <div className="product-form-control-container">
                <input className="product-form-control" type="text" />
            </div> */}
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