import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");
  const [idade, setIdade] = useState("");

  function mostrarAluno() {
    setAluno(input);
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            className="border-2 border-slate-950 rounded-md"
            placeholder="Digite uma idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <br />

        <div>
          <button
            className="border-2 border-slate-950 bg-green-400 rounded-xl items-center"
            onClick={mostrarAluno}
          >
            Mostrar Aluno
          </button>
        </div>
      </div>

      <hr />

      <div className="mt-10 mb-5">
        <h2 className="m-2 font-bold text-2xl">Bem vindo:</h2>
        <Aluno nome={(aluno, idade)} />
      </div>

      <Footer />
    </div>
  );
}
