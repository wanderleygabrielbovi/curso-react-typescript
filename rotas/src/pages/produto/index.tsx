import { useParams } from "react-router-dom";

export function Produto() {
    const { id } = useParams();

    return (
        <h1>Pagina de produto {id}</h1>
    )
}