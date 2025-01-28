import { useState } from "react";
import "./App.css";

import logoImg from './assets/img/logo.png'

export default function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome:"Motivacao",
      frases: [
        'Não é sobre ser o melhor, mas sobre ser melhor do que você era ontem.',
        'Grandes conquistas começam com pequenos passos dados com determinação.',
        'Acredite no seu potencial, porque você é capaz de alcançar muito mais do que imagina.',
        'Dificuldades são apenas degraus para quem está disposto a chegar mais alto.',
        'O único limite para o seu sucesso é a crença no quanto você pode ir além.'
      ] 
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Que o seu dia seja repleto de luz, alegria e conquistas.',
        'Bom dia! Que hoje você tenha motivos para sorrir e se sentir grato.',
        'Aproveite cada momento deste dia como uma nova oportunidade de ser feliz.',
        'Que a paz e a energia positiva te acompanhem em cada passo. Bom dia!',
        'Que o seu dia comece com esperança e termine com realizações.'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
      setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <div className="container">
        <img 
          src={logoImg} 
          alt="Logo"
          className="logo"
        />

        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allFrases.map( (item, index) => (
            <button
              key={item.id}
              className="category-button"
              style={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: " #1fa4db"
              }}

            onClick={ () => handleSwitchCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

        {textoFrase !== '' && <p className="texto-frase">{textoFrase}</p> }

      </div>
    </>
  );
}