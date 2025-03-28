"use client";

import React, { useState } from "react";
import "./garcom.css"; 

function PainelGarcom() {
<<<<<<< Updated upstream
    const [mesaSelecionada, setMesaSelecionada] = useState(""); // armazenar a mesa selecionada
    const [mesaComanda, setMesaComanda] = useState(""); // variável para armazenar a comanda
=======
    const [mesaSelecionada, setMesaSelecionada] = useState(""); // armazenamento a mesa selecionada
>>>>>>> Stashed changes

    // Lista de mesas com status de "livre" ou "ocupada"
    const mesas = [
        { id: 1, status: "livre" },
        { id: 2, status: "ocupada" },
        { id: 3, status: "livre" },
        { id: 4, status: "ocupada" },
        { id: 5, status: "livre" },
        { id: 6, status: "ocupada" },
<<<<<<< Updated upstream
        { id: 7, status: "livre" },
        { id: 8, status: "ocupada" },
        { id: 9, status: "livre" },
        { id: 10, status: "ocupada" },
    ];

    // Função para visualizar a comanda da mesa selecionada
=======

    ];

    // Função para visualizar o pedido da mesa selecionada
>>>>>>> Stashed changes
    const visualizarPedido = (mesa) => {
        setMesaComanda(mesa); // Define a comanda da mesa
        alert(`Visualizando pedido da Mesa ${mesa}`);
    };

    // Função para finalizar a comanda da mesa selecionada
    const finalizarComanda = () => {
        if (!mesaSelecionada) { // Verifica se alguma mesa foi selecionada antes de finalizar
            alert("Por favor, selecione uma mesa para finalizar a comanda.");
            return;
        }
        alert(`Comanda da Mesa ${mesaSelecionada} finalizada!`);
        setMesaSelecionada(""); // Reseta a seleção da mesa após finalizar
    };

    return (
        <div className="container">
            <h1>🍻 Painel do Garçom 🍻</h1>
            <h2>Selecione uma Mesa</h2>

            <div className="mesa_container">
                {/* Coluna de Mesas Livres */}
                <div className="mesas_coluna">
                    <h3>Mesas Livres</h3>
                    {mesas.filter(mesa => mesa.status === "livre").map(mesa => (
                        <button key={mesa.id} className="mesa_livre" onClick={() => visualizarPedido(mesa.id)}>
                            Mesa {mesa.id} (Livre)
                        </button>
                    ))}
                </div>
                
                {/* Coluna de Mesas Ocupadas */}
<<<<<<< Updated upstream
                <div className="mesas_coluna2">
                    <h3>Mesas Ocupadas</h3>
                    {mesas.filter(mesa => mesa.status === "ocupada").map(mesa => (
                        <button key={mesa.id} className="mesa_ocupada" onClick={() => visualizarPedido(mesa.id)}>
=======
                <div className="mesas_coluna">
                    <h3>Mesas Ocupadas</h3>
                    {mesas.filter(mesa => mesa.status === "ocupada").map(mesa => (
                        <button key={mesa.id} className="mesa_ocupado" onClick={() => visualizarPedido(mesa.id)}>
>>>>>>> Stashed changes
                            Mesa {mesa.id} (Ocupada)
                        </button>
                    ))}
                </div>
            </div>

            {/* Seleção de Mesa para Finalizar Comanda */}
            <div className="mesa_selecao">
                <select 
                    id="mesaSelect" 
                    className="bntselect" 
                    value={mesaSelecionada}  
                    onChange={(e) => setMesaSelecionada(parseInt(e.target.value, 10))} // Converte string para número
                >
                    <option value="">Escolha uma mesa</option>
                    {mesas.map(mesa => (
                        <option key={mesa.id} value={mesa.id} className="bntlado">
                            Mesa {mesa.id}
                        </option>
                    ))}
<<<<<<< Updated upstream
                </select> <br/> <br/>
=======
                </select>
>>>>>>> Stashed changes
                <button className="buttonfinalizar" onClick={finalizarComanda}>
                    Finalizar Comanda
                </button>
            </div>

            {/* Botão para Excluir Comanda */}
            <div className="button-container">
                <button className="buttonexcluir" onClick={() => alert("Comanda excluída!")}>Excluir</button>
            </div>
        </div>
    );
}

export default PainelGarcom;