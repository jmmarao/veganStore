import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            
            <Link to="/customer"><button className="btn">Clientes</button></Link>
            <Link to="/product"><button className="btn">Produtos</button></Link>
            <Link to="/order"><button className="btn">Pedidos</button></Link>
        </div>
    )
}

export default HomePage;