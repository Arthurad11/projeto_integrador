"use client";

import React, { useState } from "react";
import "./garcom.css"; 

function PainelGarcom() {
    const [mesaSelecionada, setMesaSelecionada] = useState(""); // armazena a mesa selecionada
    const [mesaComanda, setMesaComanda] = useState(null); // armazena a comanda da mesa (se houver)

    // Lista de mesas com status de "livre" ou "ocupada"
    const mesas = [
        { id: 1, status: "livre" },
        { id: 2, status: "ocupada", comanda: "Comanda Mesa 2 - Cliente A" },
        { id: 3, status: "livre" },
        { id: 4, status: "ocupada", comanda: "Comanda Mesa 4 - Cliente B" },
        { id: 5, status: "livre" },
        { id: 6, status: "ocupada", comanda: "Comanda Mesa 6 - Cliente C" },
        { id: 7, status: "livre" },
        { id: 8, status: "ocupada", comanda: "Comanda Mesa 8 - Cliente D" },
        { id: 9, status: "livre" },
        { id: 10, status: "ocupada", comanda: "Comanda Mesa 10 - Cliente E" },
    ];

    // Função para visualizar a comanda de uma mesa ocupada
    const visualizarComanda = (mesa) => {
        if (mesa.status === "ocupada") {
            setMesaComanda(mesa.comanda); // Exibe a comanda da mesa
            alert(`Comanda da Mesa ${mesa.id}: ${mesa.comanda}`);
        } else {
            setMesaComanda(null);
            alert(`Criando comanda para a Mesa ${mesa.id}`);
        }
    };

    // Função para finalizar a comanda
    const finalizarComanda = () => {
        if (!mesaSelecionada) {
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
                        <button key={mesa.id} className="mesa_livre" onClick={() => visualizarComanda(mesa)}>
                            Mesa {mesa.id} (Livre)
                        </button>
                    ))}
                </div>

                {/* Coluna de Mesas Ocupadas */}
                <div className="mesas_coluna2">
                    <h3>Mesas Ocupadas</h3>
                    {mesas.filter(mesa => mesa.status === "ocupada").map(mesa => (
                        <button key={mesa.id} className="mesa_ocupada" onClick={() => visualizarComanda(mesa)}>
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
                </select> <br/> <br/>
                <button className="buttonfinalizar" onClick={finalizarComanda}>
                    Finalizar Comanda
                </button>
            </div>

            {/* Botão para Excluir Comanda */}
            <div className="button-container">
                <button className="buttonexcluir" onClick={() => alert("Comanda excluída!")}>Excluir</button>
            </div>

            {/* Exibição da Comanda */}
            <div className="comanda">
                {mesaComanda && (
                    <div>
                        <h3>Comanda Selecionada:</h3>
                        <p>{mesaComanda}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PainelGarcom;
