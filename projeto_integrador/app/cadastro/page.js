"use client"

import axios from 'axios';
import './cadfunc.css'
import { useEffect, useState } from 'react';
import host from '../lib/host';

function Cadastro() {
    const [cadastrarFunc, setCadastro] = useState(true);
    const [alteraCadastro, setAlteraCadastro] = useState(false);

    const [cadastrafunc, alteraCadastraFunc] = useState("")



    async function cadastroFuncionario(){

        const obj = {
            nome: nome
        }

        const response = await axios.post(host+"/cadastro/")
		alteraCadastraFunc( response.data )

    }



    return ( 
        <div>
            
            {cadastrarFunc && (
                <div className="conjunto">
                    <form action="" method="">
                        <h1 className="titulo">Cadastro de Funcionário</h1>
                        <p>Nome Completo:</p>
                        <input placeholder="Digite seu nome aqui..." onChange={(e)=> setNome(e.target.value

                        )}/>
                        <p>Email:</p>
                        <input placeholder="Digite seu email..." /> 
                        <br/><br/>
                        <p>Senha:</p>
                        <input placeholder="Digite sua senha aqui..." type="password"/>
                        <br/><br/>
                        <button className="botao" onClick={(e)=> cadastroFuncionario(e)}>Cadastrar</button>
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