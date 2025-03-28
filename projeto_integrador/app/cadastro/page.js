"use client"

import './cadfunc.css'
import { useState } from 'react';

function Cadastro() {
    const [cadastrarFunc, setCadastro] = useState(true);
    const [alteraCadastro, setAlteraCadastro] = useState(false);

    return ( 
        <div>
            
            {cadastrarFunc && (
                <div className="conjunto">
                    <form action="" method="">
                        <h1 className="titulo">Cadastro de Funcionário</h1>
                        <p>Nome Completo:</p>
                        <input placeholder="Digite seu nome aqui..."/>
                        <p>Senha:</p>
                        <input placeholder="Digite sua senha..." type="password"/> 
                        <br/><br/>
                        <p>Login:</p>
                        <input placeholder="Digite seu nome aqui..."/>
                        <br/><br/>
                        <button className="botao">Cadastrar</button>
                        <br/><br/>
                        <button 
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