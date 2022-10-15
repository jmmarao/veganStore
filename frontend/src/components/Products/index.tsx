import './styles.css';
import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import api from '../../service/api';

function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api
            .get("/product/")
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro!" + err);
            });
    }, []);


    return (
        <div className="card">
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