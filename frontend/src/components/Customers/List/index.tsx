import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import api from '../../../service/api';

function CustomerList() {
    const [customers, setCustomers] = useState();

    useEffect(() => {
        api
            .get("/all")
            .then((response) => setCustomers(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);


    return (
        <div>
            <h1>Customer List</h1>
        </div>
        /*
        <div className="listCustomers">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div> */
    )
}

export default CustomerList;