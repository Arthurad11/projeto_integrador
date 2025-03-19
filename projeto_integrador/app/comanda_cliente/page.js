"use client";

import React, { useState } from "react";
import "./cliente.css";

function Comanda() {
    // Estado para armazenar o total gasto
    const [total, setTotal] = useState(0);
    
    // Estado para armazenar os produtos selecionados
    const [selecionados, setSelecionados] = useState({});

    // Função para calcular o total conforme os itens são selecionados ou desmarcados
    const calcularTotal = (valor, checked, id) => {
        const valorNumerico = Number(valor); // Corrigido erro "Numero" para "Number"
        
        // Atualiza o total dependendo se o item foi marcado ou desmarcado
        setTotal(prevTotal => checked ? prevTotal + valorNumerico : prevTotal - valorNumerico);
        
        // Atualiza os itens selecionados
        setSelecionados(prev => ({ ...prev, [id]: checked }));
    };

    // Função para exibir o total ao clicar no botão
    const exibirTotal = () => {
        alert(`Total gasto: R$ ${total.toFixed(2)}`);
    };

    // Função para resetar a comanda
    const resetarComanda = () => {
        setTotal(0);
        setSelecionados({});
    };

    return (
        <div className="container">
            <div className="body">
                <h1>🍺 Bem-vindo ao Boteco do João </h1>

                <h2>Pedido - Mesa 7</h2>

                <h3>✨ Promoção do Dia ✨</h3>
                <div className="item">
                    <input 
                        type="checkbox" 
                        checked={!!selecionados[1]} 
                        onChange={(e) => calcularTotal(45, e.target.checked, 1)} 
                    />
                    Combo 3 - R$ 45,00
                </div>

                <h3>Bebidas</h3>
                <div className="item">
                    <input 
                        type="checkbox" 
                        checked={!!selecionados[2]} 
                        onChange={(e) => calcularTotal(8, e.target.checked, 2)} 
                    />
                    Cerveja Long Neck - R$ 8,00
                </div>

                <h3>Espetinhos</h3>
                <div className="item">
                    <input 
                        type="checkbox" 
                        checked={!!selecionados[3]} 
                        onChange={(e) => calcularTotal(9, e.target.checked, 3)} 
                    />
                    Espetinho de Frango - R$ 9,00
                </div>

                <h3>Acompanhamentos</h3>
                <div className="item">
                    <input 
                        type="checkbox" 
                        checked={!!selecionados[4]} 
                        onChange={(e) => calcularTotal(18, e.target.checked, 4)} 
                    />
                    Porção de Batata Frita - R$ 18,00
                </div>

                <br/><br/>

                {/* Exibe o total na tela */}
                <label id="total">Total: R$ {total.toFixed(2)}</label>

                <br/><br/>

                <div className="button-container">
                    {/* Botão para exibir um alerta com o total gasto */}
                    <button className="button" onClick={exibirTotal}>
                        Ver Total
                    </button>

                    {/* Botão para resetar a comanda */}
                    <button className="button buttonexcluir" onClick={resetarComanda}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comanda;
