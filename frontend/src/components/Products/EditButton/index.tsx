import api from '../../../service/api';
import { toast } from 'react-toastify';
import icon from '../../../assets/img/edit-button.svg';
import { useEffect, useState, useRef } from "react";
import './styles.css';

/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


type Props = {
    productId: number;
}

function EditButton({ productId }: Props) {
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
            .put(`/product/${productId}/update`, productToSave)
            .then(response => console.log("Posting data: ", response))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });

        setShow(false)

        window.location.reload();
    };


    return (
        <div>
            <div className="product-red-btn" onClick={handleShow}>
                <img src={icon} alt="Edit" />
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
        </div>


    );
}

export default EditButton;