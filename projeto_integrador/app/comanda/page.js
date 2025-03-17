"use client"

// Importação de estilos
import React, { useState } from "react";
import "./cliente.css";

function Comanda() {
    // Estado para armazenar o total do pedido
    const [total, setTotal] = useState(0); // Inicializa como número

    // Função para calcular o total com base nos itens selecionados
    const calcularTotal = (valor, checked) => {
        const valorNumerico = Number(valor); // Converte string para número
        if (checked) {
            setTotal(prevTotal => prevTotal + valorNumerico);
        } else {
            setTotal(prevTotal => prevTotal - valorNumerico);
        }
    };

    return (
        <div className="body">
            {/* Título da comanda com nome do estabelecimento */}
            <h1>🍺 Bem-vindo ao Boteco do João 🍺</h1>

            {/* Subtítulo informando a mesa do pedido */}
            <h2>Novo Pedido - Mesa 7</h2>

            <br />

            {/* Promoção do dia */}
            <h3>✨ Promoção do Dia ✨</h3>
            <br/>
            <div className="item">
                <input
                    type="checkbox"
                    value="45"
                    onChange={(e) => calcularTotal(e.target.value, e.target.checked)}
                />
                Combo 3 - R$ 45,00
            </div>

            {/* Bebidas */}
            <h3>Bebidas</h3>
            <div className="item">
                <input
                    type="checkbox"
                    value="8"
                    onChange={(e) => calcularTotal(e.target.value, e.target.checked)}
                />
                Cerveja Long Neck - R$ 8,00
            </div>

            {/* Espetinhos */}
            <h3>Espetinhos</h3>
            <div className="item">
                <input
                    type="checkbox"
                    value="9"
                    onChange={(e) => calcularTotal(e.target.value, e.target.checked)}
                />
                Espetinho de Frango - R$ 9,00
            </div>

            {/* Acompanhamentos */}
            <h3>Acompanhamentos</h3>
            <div className="item">
                <input
                    type="checkbox"
                    value="18"
                    onChange={(e) => calcularTotal(e.target.value, e.target.checked)}
                />
                Porção de Batata Frita - R$ 18,00
            </div>

            {/* Exibição do total do pedido */}
            <label id="total">Total: R$ {total.toFixed(2)}</label>

            {/* Botões para excluir ou finalizar a comanda */}
            <div className="grid_buttons">
                <button
                    type="button"
                    className="btnexcluir"
                    onClick={() => setTotal(0)} // Reseta o total
                >
                    Excluir
                </button>
                <button type="button" className="btn">
                    Finalizar Comanda
                </button>
            </div>
        </div>
    );
}

export default Comanda;
