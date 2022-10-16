import './styles.css';
import { useEffect, useState } from "react";
import api from '../../service/api';
import { Customer } from '../../models/customer'

function Customers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [cpfOrEmailToFind, setcpfOrEmailToFind] = useState("");

    useEffect(() => {
        api
            .get("/customer/")
            .then((response) => setCustomers(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);

    useEffect(() => {
        api
            .get(`/customer/${cpfOrEmailToFind}`)
            .then((response) => setCustomers(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, [cpfOrEmailToFind]);
    
    return (
        <div className="card">
            <div >
                <div className="btn">
                    <button className="btn-new-customer">Novo Cliente</button>
                </div>

            </div>

            <h2 className="customer-title">Buscar cliente</h2>
            <div className="customer-form-control-container">
                <input
                    className="customer-form-control"
                    type="text"
                    value = {cpfOrEmailToFind}
                    onChange={(e) => setcpfOrEmailToFind(e.target.value)}
                    placeholder='Digite o CPF ou email do cliente' />
            </div>
            <table className="customer-table">
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
            </table>
        </div>
    );

}

export default Customers;