import './styles.css';
import { useEffect, useState } from "react";
import api from '../../../service/api';
import { Customer } from '../../../models/customer'

function CustomerList() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        api
            .get("/customer/")
            .then((response) => setCustomers(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);


    return (
        <div className="card">
            <table className="customer-table">
                <thead>
                    <tr className="show-cell">
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
            </table>
        </div>
    );

}

export default CustomerList;