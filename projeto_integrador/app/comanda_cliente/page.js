"use client";

import React, { useState, useEffect } from "react";
import "./cliente.css";
import { redirect } from "next/navigation";

function Comanda() {
    const [total, setTotal] = useState(0);
    const [selecionados, setSelecionados] = useState({});
    const [mesaId, setMesaId] = useState(7); // Default Mesa

    // Função para calcular o total conforme os itens são selecionados ou desmarcados
    const calcularTotal = (valor, checked, id) => {
        const valorNumerico = Number(valor);
        setTotal(prevTotal => checked ? prevTotal + valorNumerico : prevTotal - valorNumerico);
        setSelecionados(prev => ({ ...prev, [id]: checked }));
    };

    // Função para adicionar um produto (simulação)
    const adicionarProduto = () => {
        alert("Produto adicionado à comanda!");
    };

    // Função para resetar a comanda
    const resetarComanda = () => {
        setTotal(0);
        setSelecionados({});
    };

    // UseEffect para simular a criação de uma comanda para mesas livres
    useEffect(() => {
        if (mesaId && mesaId % 2 === 0) {  // Simula uma mesa ocupada
            alert(`Comanda da Mesa ${mesaId} carregada!`);
        }
    }, [mesaId]);

    return (
        <div className="container">
            <div className="body">
                <h1>🍺 Bem-vindo ao Boteco do João🍺 </h1>
                <br/>

                <h2>Pedido - Mesa {mesaId}</h2>
                <p> Data </p>
                <br/>

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
                
                <div>

                 <button className="button_voltar" onClick={() => {redirect("/login/login_cliente")}} >Voltar</button>
                </div>

               

                   
            </div>
        </div>
    );
}

export default Comanda;
