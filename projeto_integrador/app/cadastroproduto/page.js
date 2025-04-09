'use client'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from "react";
import "./cadprod.css"
import axios from "axios";
import { redirect } from "next/navigation";


function CadProduto() {

    const { nome, alteraNome} = useState("");
    const { categoria, alteraCategoria} = useState(null);
    const { valor, alteraValor} = useState("");



    async function cadastrarProduto() {

        const obj = {
            nome: nome,
            categoria: categoria,
            valor: valor
        }

        const response = await axios.post("http://localhost:3000/api/login", obj)
        alert("Podruto cadastrado com sucesso")
    }

    return ( 
    
    <div className="conjunto">

        <button onClick={()=> redirect("") } ><FontAwesomeIcon icon={faArrowLeft} />Voltar</button>

        <h1 className="titulo"> Cadastro de produto </h1>

        <p> Produto: </p>
        <input required placeholder="Digite o produto aqui..." onChange={(e)=> alteraNome(e.target.value)}/>

        <p>Categoria:</p>
        <select name="select">
            <option selected disabled required >Selecione uma categoria</option>
            <option onClick={()=> alteraCategoria(1)} value={1}>Cerveja</option>
            <option onClick={()=> alteraCategoria(2)} value={2}>Chopp</option>
            <option onClick={()=> alteraCategoria(3)} value={3}>Drinks</option>
            <option onClick={()=> alteraCategoria(4)} value={4}>Sucos</option>
            <option onClick={()=> alteraCategoria(5)} value={5}>Refrigerantes</option>
            <option onClick={()=> alteraCategoria(6)} value={6}>Bebidas em geral</option>
        </select>

        <p> Valor do Produto: </p>
        <input required placeholder="Digite o valor do produto..." onChange={(e)=> alteraValor(e.target.value)}/>

        <br/> <br/>
        <button className="botao"> Cadastrar </button>

    </div> );
}

export default CadProduto;