import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { useState } from "react";
import { AlunoProps } from "./utils/interfaces";

export default function App() {
  const [inputNome, setInput] = useState("");
  const [inputIdade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<AlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: inputNome,
      idade: inputIdade,
    });
  }

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }

    setContador((valorAtual) => valorAtual - 1);
  }

  return (
    <div>
      <Header title="Alunos de React + TypeScript" />
      <h2 className="font-bold mt-10 mb-2 text-2xl">Input de Aluno</h2>
      <div className="py-2">
        <div className="flex flex-col w-52 gap-2">
          <input
            className="border-2 border-slate-950 rounded-md"
            placeholder="Digite um nome"
            value={inputNome}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            className="border-2 border-slate-950 rounded-md"
            placeholder="Digite uma idade"
            value={inputIdade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <br />

        <div>
          <button
            className="border-2 border-slate-950 bg-green-400 rounded-xl"
            onClick={mostrarAluno}
          >
            Mostrar Aluno
          </button>
        </div>
      </div>
      <hr />
      {infoAluno?.nome.trim() != undefined && infoAluno?.idade != undefined && (
        <Aluno nome={infoAluno?.nome} idade={infoAluno?.idade} />
      )}
      <hr />

      <div className="flex-col mt-10">
        <h2 className="font-bold text-2xl">Contagem de numeros</h2>
        <div className="gap-6 py-4 w-4 flex">
          <button
            className="border-2 px-4 border-green-500 rounded-full"
            onClick={adicionar}
          >
            +
          </button>

          {contador}

          <button
            className="border-2 px-4 border-red-500 rounded-full"
            onClick={diminuir}
          >
            -
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
