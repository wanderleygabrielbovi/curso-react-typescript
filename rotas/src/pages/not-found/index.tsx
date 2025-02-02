import { Link } from 'react-router-dom';

export function NotFound() {
    return(
        <div>
            <h1>Ops... essa pagina nao existe! :/</h1>
            <Link to="/">Acessar pagina home</Link>
        </div>
    )
}