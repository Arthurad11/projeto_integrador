"use client";

import React, { useState } from "react";
import "./garcom.css";

function PainelGarcom() {
    const [mesaSelecionada, criarMesaSelecionada] = useState("");

    const visualizarPedido = (mesa) => {
        alert(`Visualizando pedido da Mesa ${mesa}`);
    };

    const finalizarComanda = () => {
        if (!mesaSelecionada) {
            alert("Por favor, selecione uma mesa para finalizar a comanda.");
            return;
        }
        alert(`Comanda da Mesa ${mesaSelecionada} finalizada!`);
        criarMesaSelecionada("");
    };

    return (
        <div className="container">
            <h1 >🍻 Painel do Garçom 🍻</h1>
            <h2 >Selecione uma Mesa</h2>

            <div className="">
                <div>
                    <button className="buttonlivre" onClick={() => visualizarPedido(1)}>
                        Mesa 1 (Livre)
                    </button>
                </div>
                <div>
                    <button className="buttonOcupado" onClick={() => visualizarPedido(2)}>
                        Mesa 2 (Ocupada)
                    </button>
                </div>
                <div>
                    <button className="buttonlivre" onClick={() => visualizarPedido(3)}>
                        Mesa 3 (Livre)
                    </button>
                </div>
            </div>

            <div className="">
                <div className="">
                    <select 
                        id="mesaSelect" 
                        className="bntselect" 
                        
                        value={mesaSelecionada}  // value={mesaSelecionada} o value={nome} 
                        // faz com que o valor do campo de entrada seja 
                        // controlado pela variável nome no estado do React.
                        //  O campo de entrada sempre exibirá o valor de nome.
                        onChange={(e) => criarMesaSelecionada(e.target.value)}
                    >
                        <option value="">Escolha uma mesa </option>
                        <option value="1" className="bntlado">Mesa 1</option>
                        <option value="2" className="bntlado">Mesa 2</option>
                        <option value="3" className="bntlado">Mesa 3</option>
                    </select>
                </div>
                <div className="">
                    <button className="buttonfinalizar " onClick={finalizarComanda}>
                        Finalizar 
                    </button>
                </div>
            </div>

            <div className="button-container">
                <button className="buttonexcluir" onClick={() => alert("Comanda excluída!")}>Excluir</button>
            </div>
        </div>
    );
}

export default PainelGarcom;
