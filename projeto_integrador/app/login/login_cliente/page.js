import React from 'react';
import './logincliente.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        {/* SVG de fundo */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%">
          {/* ... (mantenha todo o conteúdo do SVG aqui) ... */}
        </svg>
      </div>

      <div className="card__avatar">
        {/* SVG do avatar */}
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          {/* ... (mantenha todo o conteúdo do avatar aqui) ... */}
        </svg>
      </div>

      <div className="card__title">Cameron Williamson</div>
      <div className="card__subtitle">Web Development</div>

      <div className="card__wrapper">
        <button className="card__btn">Button</button>
        <button className="card__btn card__btn-solid">Button</button>
      </div>
    </div>
  );
};

export default Card;
