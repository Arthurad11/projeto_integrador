'use client'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from "react";
import "./cadprod.css"
import axios from "axios";
import { redirect } from "next/navigation";


function CadProduto() {

    const [nome, alteraNome] = useState("");
    const [ categoria, alteraCategoria] = useState(null);
    const [ valor, alteraValor] = useState("");



    async function cadastrarProduto() {



        const obj = {
            nome: nome,
            categoria: categoria,
            valor: valor
        }

        try {
            const response = await axios.post("http://localhost:3000/api/produtos", obj);
            alert("Produto cadastrado com sucesso");
        } catch (error) {
            alert("Erro ao cadastrar produto: " + error.message);
            e.preventDefault();
        }
    }

    return ( 
    
    <form className="conjunto" onSubmit={(e) => cadastrarProduto(e)}>

        
        <button onClick={()=> window.location.href = "/dashboard" } ><FontAwesomeIcon icon={faArrowLeft} />Voltar</button>

        <h1 className="titulo"> Cadastro de produto </h1>

        <p> Produto: </p>
        <input required placeholder="Digite o produto aqui..." onChange={(e)=> alteraNome(e.target.value)}/>

        <p>Categoria:</p>
        <select name="select" onChange={(e) => alteraCategoria(e.target.value)}>
            <option selected disabled required value={0}>Selecione uma categoria</option>
            <option value={1}>Cerveja</option>
            <option value={2}>Chopp</option>
            <option value={3}>Drinks</option>
            <option value={4}>Sucos</option>
            <option value={5}>Refrigerantes</option>
            <option value={6}>Bebidas em geral</option>
        </select>

        <p> Valor do Produto: </p>
        <input required placeholder="Digite o valor do produto..." onChange={(e)=> alteraValor(e.target.value)}/>

        <br/> <br/>
        <button className="botao"> Cadastrar </button>

    </form> );
}

export default CadProduto;