"use client";

import React, { useState } from "react";
import "./garcom.css";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function PainelGarcom() {
  const [mesaSelecionada, setMesaSelecionada] = useState("");
  const mesas = [
    { id: 1, status: "livre" },
    { id: 2, status: "ocupada" },
    { id: 3, status: "livre" },
    { id: 4, status: "ocupada" },
    { id: 5, status: "livre" },
    { id: 6, status: "ocupada" },
    { id: 7, status: "livre" },
    { id: 8, status: "ocupada" },
    { id: 9, status: "livre" },
    { id: 10, status: "ocupada" },
  ];

  const visualizarPedido = (mesa) => {
    alert(`Visualizando pedido da Mesa ${mesa}`);
  };

  const finalizarComanda = () => {
    if (!mesaSelecionada) {
      alert("Por favor, selecione uma mesa para finalizar a comanda.");
      return;
    }
    alert(`Comanda da Mesa ${mesaSelecionada} finalizada!`);
    setMesaSelecionada("");
  };

  return (
    <div className="container">
      {/* Card do Garçom */}
      <div className="card-container">
        <div className="logo-wrapper">
          <img
            className="logo-img"
            src="/img/logo.png"
            alt="Logo do Bar"
          />
        </div>

        <div className="card">
          

          <div className="card__avatar">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/garcom-5796564-4841563.png?f=webp"
              alt="Avatar do garçom"
            />
          </div>

          <div className="card__nome"><strong>Willian Souza</strong></div>
          <div className="card__email">willian_souza@gmail.com</div>
          <div className="card__garcom">Garçom</div>
        </div>
      </div>

      {/* Painel de Comandas */}
      <div className="card-container">
        <div className="card__content">
          <h1>🍻 Painel de Comandas 🍻</h1>
          <h2>Mesas Disponíveis</h2>

          <div className="mesa_container">
            <div className="mesas_coluna">
              <h3>Livres</h3>
              {mesas.filter(m => m.status === "livre").map(mesa => (
                <div className="item" key={mesa.id}>
                  Mesa {mesa.id}
                  <button className="card__btn" onClick={() => visualizarPedido(mesa.id)}>
                    Ver Pedido
                  </button>
                </div>
              ))}
            </div>

            <div className="mesas_coluna">
              <h3>Ocupadas</h3>
              {mesas.filter(m => m.status === "ocupada").map(mesa => (
                <div className="item" key={mesa.id}>
                  Mesa {mesa.id}
                  <button className="card__btn" onClick={() => visualizarPedido(mesa.id)}>
                    Ver Pedido
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mesa_selecao">
            <h3>Finalizar Comanda</h3>
            <select
              className="bntselect"
              value={mesaSelecionada}
              onChange={(e) => setMesaSelecionada(parseInt(e.target.value))}
            >
              <option value="">Escolha uma mesa</option>
              {mesas.map(mesa => (
                <option key={mesa.id} value={mesa.id}>
                  Mesa {mesa.id}
                </option>
              ))}
            </select>
            <br /><br />
            <button className="card__btn" onClick={finalizarComanda}>
              Finalizar
            </button>
          </div>

          <div className="button-container">
            <button className="button_voltar" onClick={() => redirect("/login/login_garcom")}>
              <FontAwesomeIcon icon={faHouse} /> Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainelGarcom;
