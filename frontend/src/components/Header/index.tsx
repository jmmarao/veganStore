import './styles.css';
import logo from '../../assets/img/logo.png';

function Header() {
    return (
        <header>
        <div className="logo-container">
                <img src={logo} alt="logo" />
            <div>
                <p>Desenvolvido por Allan Specian | João Mateus | Roberto Molina</p>
            </div>
        </div>
        </header>
    )
}

export default Header;