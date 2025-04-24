"use client"

import axios from 'axios';
import './cadfunc.css'
import { useEffect, useState } from 'react';
import host from '../lib/host';



function Cadastro() {
    const [cadastrarFunc, setCadastro] = useState(true);
    const [alteraCadastro, setAlteraCadastro] = useState(false);

    // estados para os dados do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [funcionario, setFuncionario] = useState(true);

    async function cadastroFuncionario(e) {
    
        e.preventDefault();

        const obj = {
            nome: nome,
            email: email,
            senha: senha,
            funcionario: funcionario
        };

        try {
            const response = await axios.post(host +"/cadastro", obj);
            localStorage.setItem("usuario", JSON.stringify(response.data));
            window.location.href = "/dashboard";
        } catch (err) {
            console.error("Erro ao cadastrar:", err.message);
        }
        
    }

    return ( 
        
        <div>
                <div className="logo-wrapper">
                <img className="logo-img" src="/img/logo.png" alt="Logo do Bar" />
                 </div>
            {cadastrarFunc && (

                
                
                <div className="conjunto">
                    <form onSubmit={(e)=> cadastroFuncionario(e)}>
                        <h1 className="titulo">Cadastro de Funcionário</h1>
                        <hr/>
                        <p>Nome Completo:</p>
                        <input
                            placeholder="Digite seu nome aqui..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <p>Email:</p>
                        <input
                            placeholder="Digite seu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <br/><br/>

                        <p>Senha:</p>
                        <input
                            placeholder="Digite sua senha aqui..."
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <br/><br/>

                        <button type="submit" className="botao">
                            Cadastrar
                        </button>

                        <br/><br/>

                        <button
                            type="button"
                            className="botaoAlterar"
                            onClick={() => {
                                setCadastro(false);
                                setAlteraCadastro(true);
                            }}
                        >
                            Alterar
                        </button>
                    </form>
                </div>
            )}

            {alteraCadastro && (
                <div className="conjunto">
                    <h1 className="titulo">Alterar cadastro de funcionário</h1>
                    <p>Nome Completo:</p>
                    <input placeholder="Digite seu nome aqui..."/>
                    <p>Senha:</p>
                    <input placeholder="Digite sua senha..." type="password"/>
                    <p>Nova Senha:</p>
                    <input placeholder="Digite sua nova senha..." type="password"/>
                    <br/><br/>
                    <button className="botao">Atualizar</button>
                    <br/><br/>
                    <button
                        className="botaoAlterar"
                        onClick={() => {
                            setCadastro(true);
                            setAlteraCadastro(false);
                        }}
                    >
                        Cadastrar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cadastro;
