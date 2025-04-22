"use client";

import React, { useState } from "react";
import "./garcom.css";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function PainelGarcom() {
  const [mesas, setMesas] = useState([
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
  ]);

  const [mesaSelecionada, setMesaSelecionada] = useState("");
  const [comandaVisualizada, setComandaVisualizada] = useState(null);

  const comandasMock = {
    2: { mesa: 2, itens: [{ nome: "Cerveja", preco: 8.5 }] },
    4: { mesa: 4, itens: [{ nome: "Batata Frita", preco: 14 }] },
    6: { mesa: 6, itens: [{ nome: "Caipirinha", preco: 10 }] },
    8: { mesa: 8, itens: [{ nome: "Pizza Calabresa", preco: 28 }] },
    10: { mesa: 10, itens: [{ nome: "Suco Natural", preco: 7 }] },
  };

  const finalizarComanda = () => {
    if (!mesaSelecionada) return;
    setMesas((prev) =>
      prev.map((m) =>
        m.id === parseInt(mesaSelecionada) ? { ...m, status: "livre" } : m
      )
    );
    setComandaVisualizada(null);
    setMesaSelecionada("");
  };

  const ocuparMesa = (id) => {
    setMesas((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "ocupada" } : m))
    );
  };

  const visualizarPedido = (mesaId) => {
    setComandaVisualizada(comandasMock[mesaId]);
  };

  return (
    <div className="container">
      {/* Card do Garçom */}
      <div className="card-container">
        <div className="logo-wrapper">
          <img className="logo-img" src="/img/logo.png" alt="Logo do Bar" />
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

          <div className="mesa_container">
            {/* Mesas Livres */}
            <div className="mesas_coluna">
              <h3>Livres</h3>
              {mesas.filter(m => m.status === "livre").map(mesa => (
                <div className="item" key={mesa.id}>
                  Mesa {mesa.id}
                  <button className="card__btn" onClick={() => ocuparMesa(mesa.id)}>
                    Livre
                  </button>
                </div>
              ))}
            </div>

            {/* Mesas Ocupadas */}
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

          {/* Selecionar mesa para finalizar */}
          <div className="mesa_selecao">
            <h3>Finalizar Comanda</h3>
            <select
              className="bntselect"
              value={mesaSelecionada}
              onChange={(e) => setMesaSelecionada(e.target.value)}
            >
              <option value="">Escolha uma mesa</option>
              {mesas.filter(m => m.status === "ocupada").map(m => (
                <option key={m.id} value={m.id}>Mesa {m.id}</option>
              ))}
            </select>
            <br /><br />
            <button className="card__btn" onClick={finalizarComanda}>
              Finalizar
            </button>
          </div>

          {/* Exibir Comanda Visualizada */}
          {comandaVisualizada && (
            <div className="comanda-card">
              <h3>Comanda da Mesa {comandaVisualizada.mesa}</h3>
              <ul>
                {comandaVisualizada.itens.map((item, i) => (
                  <li key={i}>
                    <span>{item.nome}</span> - <span>R$ {item.preco.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> R$ {comandaVisualizada.itens.reduce((t, i) => t + i.preco, 0).toFixed(2)}
              </p>
            </div>
          )}

          {/* Botão Voltar */}
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
