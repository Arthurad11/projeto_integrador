"use client"

import axios from 'axios';
import './cadfunc.css'
import { useEffect, useState } from 'react';
import host from '../lib/host';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


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
        
        <div className='tela_cadastro'>
                
                  
            {cadastrarFunc && (

                
                
                <div className="conjunto">
                    <button
                        className="botaoVoltarHome"
                        onClick={() => (window.location.href = "/dashboard")}
                        >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <form onSubmit={(e)=> cadastroFuncionario(e)}>
                        <h1 className="titulo">Cadastro de Funcionário</h1>
                        <hr/>
                        <br/>

                        <p className="padInicial" >Nome Completo:</p>
                        <input
                            placeholder="Digite seu nome aqui..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <br/><br/>

                        <p className="padInicial" >Email:</p>
                        <input
                            placeholder="Digite seu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <br/><br/>

                        <p className="padInicial" >Senha:</p>
                        <input
                            placeholder="Digite sua senha aqui..."
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <br/><br/><br/>
                        
                        <button type="submit" className="botaoCadastrar">
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
