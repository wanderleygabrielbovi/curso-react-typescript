import { AlunoProps } from "../utils/interfaces";

export function Aluno({ nome, idade }: AlunoProps) {
  return (
    <div className="mt-10 mb-5">
      <h2 className="m-2 font-bold text-2xl">Bem vindo:</h2>
      <h2>
        <strong>Aluno:</strong> {nome}
      </h2>
      <h3>
        <strong>Idade:</strong> {idade}
      </h3>
    </div>
  );
}
