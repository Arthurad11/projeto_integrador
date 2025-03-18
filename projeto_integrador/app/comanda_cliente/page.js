"use client";

import React, { useState } from "react";
import "./cliente.css";

function Comanda() {
    const [total, criarTotal] = useState(0);
    const [selecionados, criarSelecionados] = useState({});

    const calcularTotal = (valor, checked, id) => {
        const valorNumerico = Numero(valor);
        criarTotal(prevTotal => checked ? prevTotal + valorNumerico : prevTotal - valorNumerico);
        criarSelecionados(prev => ({ ...prev, [id]: checked }));
    };

    const resetarComanda = () => {
        criarTotal(0);
        criarSelecionados({});
    };

    return (
        <div className="container">
            <div className="body">
                <h1>🍺 Bem-vindo ao Boteco do João </h1>
                

                <h2> Pedido - Mesa 7</h2>
                <br/>

                <h3>✨ Promoção do Dia ✨</h3>
                <br/>
                <div className="item">
                    <input type="checkbox" checked={!!selecionados[1]} onChange={(e) => calcularTotal(45, e.target.checked, 1)} />
                    Combo 3 - R$ 45,00
                </div>
                

                <h3>Bebidas</h3>
                
                <div className="item">
                    <input type="checkbox" checked={!!selecionados[2]} onChange={(e) => calcularTotal(8, e.target.checked, 2)} />
                    Cerveja Long Neck - R$ 8,00
                </div>
                

                <h3>Espetinhos</h3>
                
                <div className="item">
                    <input type="checkbox" checked={!!selecionados[3]} onChange={(e) => calcularTotal(9, e.target.checked, 3)} />
                    Espetinho de Frango - R$ 9,00
                </div>
                

                <h3>Acompanhamentos</h3>
                
                <div className="item">
                    <input type="checkbox" checked={!!selecionados[4]} onChange={(e) => calcularTotal(18, e.target.checked, 4)} />
                    Porção de Batata Frita - R$ 18,00
                </div>
                <br/><br/><br/>

                <label id="total">Total: R$ {total.toFixed(2)}</label>
                <br/><br/>

                <div className="button-container">
                    <button className="button buttonexcluir" type="button" onClick={resetarComanda}>
                        Excluir
                    </button>
                    <button className="button buttonfinalizar" type="button" onClick={resetarComanda}>
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comanda;
