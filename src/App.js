import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {

  const [posicaoX, setPosicaoX] = useState(0);
  const [posicaoY, setPosicaoY] = useState(0);

  const personagem = {

    id: 'birdy',
    image: 'img/nave.png',
    class: 'birdy',
    tema: {
      left: posicaoX + 'px',
      top: posicaoY + 'px',
    }

  };

  const funcao = (event) => {

    switch (event.key) {

      case 'ArrowUp':
        setPosicaoY((prevPosicaoX) => prevPosicaoX - 5);
        break;

      case 'ArrowDown':
        setPosicaoY((prevPosicaoX) => prevPosicaoX + 5);
        break;

      case 'ArrowLeft':
        setPosicaoX((prevPosicaoX) => prevPosicaoX - 5);
        break;

      case 'ArrowRight':
        setPosicaoX((prevPosicaoX) => prevPosicaoX + 5);
        break;

    }

  };

  useEffect(() => {

    const elemento = document.body;
    elemento.addEventListener('keydown', funcao);

  }, []);

  return (
    <>
      <img id={personagem.id} src={personagem.image} className={personagem.class} style={personagem.tema} />
    </>
  );

}