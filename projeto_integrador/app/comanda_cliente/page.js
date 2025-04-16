"use client";

import React, { useState, useEffect } from "react";
import "./cliente.css";



function Comanda() {
  const [total, setTotal] = useState(0);
  const [selecionados, setSelecionados] = useState({});
  const [mesaId, setMesaId] = useState(7);
  const [mostrarComanda, setMostrarComanda] = useState(false);

  const calcularTotal = (valor, checked, id) => {
    const valorNumerico = Number(valor);
    setTotal(prev => checked ? prev + valorNumerico : prev - valorNumerico);
    setSelecionados(prev => ({ ...prev, [id]: checked }));
  };

  useEffect(() => {
    if (mesaId && mesaId % 2 === 0) {
      alert(`Comanda da Mesa ${mesaId} carregada!`);
    }
  }, [mesaId]);

  return (
    <div className="container">
      <div className="card-container">
        <div className="logo-wrapper">
          <img className="logo-img" src="/img/logo.png" alt="Logo do Bar" />
        </div>

        <div className="card">
          <div className="card__img"></div>
          <div className="card__avatar">
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/t1/7033146-perfil-icone-login-head-icon-vetor.jpg"
              alt="Avatar do cliente"
            />
          </div>
          <div className="card__nome">Denise sai da live</div>
          <div className="card__email">denise@gmail.com</div>
          <div className="card__wrapper">
            <button className="card__btn" onClick={() => setMostrarComanda(!mostrarComanda)}>
              {mostrarComanda ? "Fechar Comanda" : "Visualizar Comanda"}
            </button>
          </div>
        </div>
      </div>

      {mostrarComanda && (
        <div className="comanda-card">
          <div className="card__img"></div>
          <div className="card__content">
            <h2>Comanda - Mesa {mesaId}</h2>
            <p><strong>___________________________</strong></p>
            
            <p>{new Date().toLocaleDateString()}</p>

            <div className="item">
              <input
                type="checkbox"
                checked={!!selecionados[2]}
                onChange={(e) => calcularTotal(8, e.target.checked, 2)}
              />
              Cerveja Long Neck - R$ 8,00
            </div>

            <div className="item">
              <input
                type="checkbox"
                checked={!!selecionados[3]}
                onChange={(e) => calcularTotal(9, e.target.checked, 3)}
              />
              Espetinho de Frango - R$ 9,00
            </div>

            <div className="item">
              <input
                type="checkbox"
                checked={!!selecionados[4]}
                onChange={(e) => calcularTotal(18, e.target.checked, 4)}
              />
              Porção de Batata Frita - R$ 18,00
            </div>

            <div className="total-label">Total: R$ {total.toFixed(2)}</div>
          </div>
        </div>
      )}
       <footer className="footer">
        <p>© 2025 Bar do João. Todos os direitos reservados.</p>
      </footer>
        
    </div>
    
  );
}

export default Comanda;
