import { Link } from 'react-router-dom';

export function Contato() {
    return(
        <div>
            <h1>Página de contatos!</h1>
            <h3>Telefone: (xx) xxxxx-xxxx</h3>

            <hr />

            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/">Ir para home</Link>
        </div>
    )
}