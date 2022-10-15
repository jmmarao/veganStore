import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import api from '../../../service/api';
import { Customer } from '../../../models/customer'

function CustomerList() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        api
            .get("/customer")
            .then((response) => setCustomers(response.data.content))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);


    return (
        <>
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
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default CustomerList;