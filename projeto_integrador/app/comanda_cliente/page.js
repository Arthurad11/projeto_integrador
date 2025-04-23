"use client";

import React, { useState, useEffect } from "react";
import "./cliente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import host from "../lib/host";
import axios from "axios";
import Alert from "../components/Alert";



function Comanda() {
  const [total, setTotal] = useState(0);
  const [selecionados, setSelecionados] = useState({});
  const [mesaId, setMesaId] = useState(7);
  const [mostrarComanda, setMostrarComanda] = useState(true);

  const [usuario, setUsuario] = useState({});
  const [idUsuario, setIdUsuario] = useState(0);

  const [comanda, setComanda] = useState([]);

  const calcularTotal = (valor, checked, id) => {
    const valorNumerico = Number(valor);
    setTotal(prev => checked ? prev + valorNumerico : prev - valorNumerico);
    setSelecionados(prev => ({ ...prev, [id]: checked }));
  };

  function deslogar(){
		localStorage.removeItem("usuario");
		window.location.href = "/";
	}

  

  async function buscaPedido(id){
    
    const response = await axios.get(host+ "/comanda/"+id);

    setComanda(response.data);

    setMesaId(response.data[0].mesa);


    setTotal(response.data.reduce((acc, item) => acc + item.preco * item.quantidade, 0))

  }

  

  useEffect(() => {

    const usuarioLocal = localStorage.getItem("usuario");
    
		if(usuarioLocal == "" || usuarioLocal == null){
      window.location.href = "/";
			return;
		}
    
		setUsuario(JSON.parse(usuarioLocal));
    buscaPedido(JSON.parse(usuarioLocal).id)
	}, []);


  useEffect(() => {
    if (mesaId && mesaId % 2 === 0) {
      alert(`Comanda da Mesa ${mesaId} carregada!`);
    }
  }, [mesaId]);



  return (
    <div className="container">
      <div className="card-container">
        <div className="logo-wrapper">
          <img className="logo-img" src="/img/logo.png" alt="Logo do Bar" />
        </div>

        <div className="card">
          <div className="card__img"></div>
          <div className="card__avatar">
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/t1/7033146-perfil-icone-login-head-icon-vetor.jpg"
              alt="Avatar do cliente"
            />
          </div>
          <div className="card__nome">{usuario.nome}</div>
          <div className="card__email">{usuario.email}</div>
          <div className="card__wrapper">
            <button className="card__btn" onClick={() => setMostrarComanda(!mostrarComanda)}>
              {mostrarComanda ? "Fechar Comanda" : "Visualizar Comanda"}
            </button>

            <br/>

            <button className="card__btn" onClick={()=>deslogar()} ><FontAwesomeIcon width={20} height={14} icon={faArrowRightToBracket}    /></button>

          </div>
        </div>
      </div>

      {mostrarComanda && (
        <div className="comanda-card" >
          <div className="card__img"></div>
          <div className="card__content">
            <h2>Comanda - Mesa {mesaId}</h2>
            <p><strong>___________________________</strong></p>
            
            <p>{new Date().toLocaleDateString()}</p>

            {comanda.map( (i)=> (
              <div className="item">
              {/* <input
                type="checkbox"
                checked={!!selecionados[i]}
                onChange={(e) => calcularTotal(8, e.target.checked, i)}
              /> */}
              {i.nome} - R$ {(i.preco*i.quantidade).toFixed(2)}
            </div>
            ) )}


            <div className="total-label">Total: R$ {total.toFixed(2)}</div>
          </div>
        </div>
      )}
       <footer className="footer">
        <p>© 2025 Bar do João. Todos os direitos reservados.</p>
      </footer>
        
    </div>
    
  );
}

export default Comanda;
