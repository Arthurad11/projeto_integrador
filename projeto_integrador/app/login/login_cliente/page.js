'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './logincliente.css'; // Assume que o CSS está nesse arquivo

const Card = () => {
  const [title, setTitle] = useState("Cameron Williamson");
  const [subtitle, setSubtitle] = useState("Web Development");

  const handleClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setTitle(response.data.name);
      setSubtitle(response.data.email);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div className="card">
      <div className="card__img">
        {/* Insere o mesmo SVG ou use uma imagem externa */}
        <svg width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect height="450" width="540" fill="#ffffff"></rect>
          {/* Adicione o restante do SVG aqui ou substitua por uma imagem */}
        </svg>
      </div>

      <div className="card__avatar">
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <circle r="60" fill="#ff8475" cy="64" cx="64" />
          {/* Reduza o SVG ou use <img src="avatar.svg" /> */}
        </svg>
      </div>

      <div className="card__title">{title}</div>
      <div className="card__subtitle">{subtitle}</div>

      <div className="card__wrapper">
        <button className="card__btn" onClick={handleClick}>
          Buscar
        </button>
        <button className="card__btn card__btn-solid" onClick={handleClick}>
          Atualizar
        </button>
      </div>
    </div>
  );
};

export default Card;
