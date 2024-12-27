import { AlunoProps } from "../utils/interfaces";

export function Aluno({ nome, idade }: AlunoProps) {
  return (
    <div>
      <h2>
        <strong>Aluno:</strong> {nome}
      </h2>
      <h3>{idade ? `com ${idade} anos` : ""}</h3>
    </div>
  );
}
