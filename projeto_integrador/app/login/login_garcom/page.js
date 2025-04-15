'use client'
import React from 'react';
import './logingarcom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { redirect } from 'next/navigation';



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
            src="https://cdn3d.iconscout.com/3d/premium/thumb/garcom-5796564-4841563.png?f=webp" 
            alt="Avatar do garcom" 
          />
           
        </div>

        <div className="card__nome"><strong>Willian Souza</strong></div>
        <br/>
        <div className="card__email">willian_souza@gmail.com</div>
        <br/>
        <div className='card__garcom'>Garçom</div>
        <br/>
        <br/>
        
        <div className="card__wrapper">
          <button onClick={()=> {redirect("/comanda_garcom")} } className="card__btn" >Comanda Garçom</button>
          <br/>
          <br/>

          

          

          
        </div>
        
      </div>
    </div>
  );
};

export default Card;
