import React from 'react';
import './logincliente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';



const Card = () => {
  return (
    <div className="card-container">
      <div className="logo-wrapper">
        <img
          className="logo-img"
          src="/img/logo.png" // Altere para o caminho real da sua logo
          alt="Logo do Bar"
        />
      </div>

      <div className="card">
        <div className="card__img">
          <svg xmlns="https://previews.123rf.com/images/tarapong/tarapong1309/tarapong130900020/22007313-white-geometric-wallpaper-background.svg" width=" ">
            {/* Conteúdo do SVG de fundo */}
          </svg>
          <hr/>
        </div>
       

        <div className="card__avatar">
          <img 
            src="https://i.pinimg.com/736x/72/a0/e1/72a0e1f4e0f7b4461911a7c56d4688e9.jpg" 
            alt="Avatar do cliente" 
          />
           
        </div>

        <div className="card__nome"><strong>Denise sai da live</strong></div>
        <br/>
        <div className="card__email">denise@gmail.com</div>
        <br/>
        <br/>
        <br/>
        
        <div className="card__wrapper">
          <button className="card__btn">Visualizar Comanda</button>
          <br/>
          <br/>

          <button></button>

          

          
        </div>
        
      </div>
    </div>
  );
};

export default Card;
