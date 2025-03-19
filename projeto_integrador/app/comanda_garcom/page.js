"use client";

import React, { useState } from "react";
import "./garcom.css"; // Importação do arquivo de estilos CSS

function PainelGarcom() {
    const [mesaSelecionada, setMesaSelecionada] = useState(""); // Estado para armazenar a mesa selecionada

    // Lista de mesas com status de "livre" ou "ocupada"
    const mesas = [
        { id: 1, status: "livre" },
        { id: 2, status: "ocupada" },
        { id: 3, status: "livre" },
        { id: 4, status: "ocupada" },
        { id: 5, status: "livre" },
        { id: 6, status: "livre" },

    ];

    // Função para visualizar o pedido da mesa selecionada
    const visualizarPedido = (mesa) => {
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
                <div className="mesas_coluna">
                    <h3>Mesas Ocupadas</h3>
                    {mesas.filter(mesa => mesa.status === "ocupada").map(mesa => (
                        <button key={mesa.id} className="mesa_ocupado" onClick={() => visualizarPedido(mesa.id)}>
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
                </select>
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
